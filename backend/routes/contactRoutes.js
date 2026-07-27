import express from "express";
import { submitContactForm } from "../controllers/contactController.js";
import verifyRecaptcha from "../middleware/verifyRecaptcha.js";

const router = express.Router();

router.post("/", verifyRecaptcha, submitContactForm);

export default router;
