import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import pincodeRoutes from "./src/routes/pincodeRoutes.js";
import connectDB from "./src/config/db.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Bangalore Pincode Explorer API is running",
  });
});

app.use("/api/pincode", pincodeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});