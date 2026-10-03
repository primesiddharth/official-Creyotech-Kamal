import express from "express";
import { managerLogin, managerLogout } from "../controllers/authController.js";

const router = express.Router();
router.post("/login", managerLogin);
router.post("/logout", managerLogout);

export default router;