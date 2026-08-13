import express from "express";

import { getPincode } from "../controllers/pincodeController.js";

const router = express.Router();

router.get("/:pincode", getPincode);

export default router;