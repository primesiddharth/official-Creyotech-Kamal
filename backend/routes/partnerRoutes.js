import express from "express";
import { requireManagerAuth } from "../middleware/requireManagerAuth.js";
import {
  createVendor, listVendors,
  createFreelancer, listFreelancers,
  createAssociate, listAssociates,
  deletePartner,
} from "../controllers/partnerController.js";

const router = express.Router();
router.use(requireManagerAuth);

router.get("/vendor", listVendors);
router.post("/vendor", createVendor);

router.get("/freelancer", listFreelancers);
router.post("/freelancer", createFreelancer);

router.get("/associate", listAssociates);
router.post("/associate", createAssociate);

router.delete("/:type/:id", deletePartner);

export default router;