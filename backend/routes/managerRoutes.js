import express from "express";
import { requireManagerAuth } from "../middleware/requireManagerAuth.js";
import { studentUpload } from "../middleware/studentUpload.js";
import {
  createStudent, updateStudent, deleteStudent,
  regenerateAccess, listStudentsForManager,
} from "../controllers/managerController.js";

const router = express.Router();
router.use(requireManagerAuth);

router.get("/students", listStudentsForManager);
router.post("/students", studentUpload.single("image"), createStudent);
router.put("/students/:id", studentUpload.single("image"), updateStudent);
router.delete("/students/:id", deleteStudent);
router.post("/students/:id/regenerate", regenerateAccess);

export default router;