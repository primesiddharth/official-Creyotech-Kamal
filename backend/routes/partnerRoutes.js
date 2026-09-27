import express from "express";
import { requireManagerAuth } from "../middleware/requireManagerAuth.js";
import { listPartners, createPartner, deletePartner } from "../controllers/partnerController.js";

const router = express.Router();
router.use(requireManagerAuth);

router.get("/:type", listPartners);
router.post("/:type", createPartner);
router.delete("/:type/:id", deletePartner);

export default router;