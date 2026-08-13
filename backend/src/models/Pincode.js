import mongoose from "mongoose";

const pincodeSchema = new mongoose.Schema(
  {
    pincode: {
      type: String,
      required: true,
      unique: true,
    },

    areas: [
      {
        name: String,
        district: String,
        state: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Pincode = mongoose.model("Pincode", pincodeSchema);
export default Pincode;