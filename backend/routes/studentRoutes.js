import express from "express";
import { listStudents, getStudentBySlug } from "../controllers/studentController.js";

const router = express.Router();
router.get("/", listStudents);
router.get("/:slug", getStudentBySlug);

export default router;