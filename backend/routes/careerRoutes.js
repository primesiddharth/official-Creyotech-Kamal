import express from "express";

import { submitCareerForm } from "../controllers/careerController.js";

import { careerUpload } from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/",

  careerUpload.fields([
    {
      name: "resume",
      maxCount: 1,
    },

    {
      name: "address_proof",
      maxCount: 1,
    },

    {
      name: "marksheet",
      maxCount: 1,
    },
  ]),

  submitCareerForm,
);

export default router;
