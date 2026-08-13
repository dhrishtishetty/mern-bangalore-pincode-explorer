import axios from "axios";
import Pincode from "../models/Pincode.js";

export const getPincode = async (req, res) => {
  try {
    const { pincode } = req.params;

    if (!/^\d{6}$/.test(pincode)) {
      return res.status(400).json({
        message: "Please enter a valid 6-digit pincode.",
      });
    }

    const existingPincode = await Pincode.findOne({ pincode });

    if (existingPincode) {
      return res.status(200).json({
        source: "database",
        pincode: existingPincode.pincode,
        areas: existingPincode.areas,
      });
    }

    const response = await axios.get(
      `https://api.postalpincode.in/pincode/${pincode}`
    );

    const data = response.data[0];

    if (data.Status !== "Success" || !data.PostOffice) {
      return res.status(404).json({
        message: "Pincode not found.",
      });
    }

    const bangaloreOffices = data.PostOffice.filter((office) => {
      const district = office.District?.toLowerCase() || "";
      const division = office.Division?.toLowerCase() || "";

      return (
        district.includes("bangalore") ||
        district.includes("bengaluru") ||
        division.includes("bangalore") ||
        division.includes("bengaluru")
      );
    });

    if (bangaloreOffices.length === 0) {
      return res.status(404).json({
        message: "This pincode does not belong to Bangalore.",
      });
    }

    const areas = bangaloreOffices.map((office) => ({
      name: office.Name,
      district: office.District,
      state: office.State,
    }));

    const newPincode = await Pincode.create({
      pincode,
      areas,
    });

    res.status(200).json({
      source: "api",
      pincode: newPincode.pincode,
      areas: newPincode.areas,
    });
  } catch (error) {
    console.error("Pincode Error:", error.message);

    res.status(500).json({
      message: "Server error. Please try again.",
    });
  }
};