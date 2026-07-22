import multer from "multer";
import path from "path";

// Store files in memory
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const extension = path.extname(file.originalname).toLowerCase();

  // Allow PDF only
  if (extension !== ".pdf" || file.mimetype !== "application/pdf") {
    return cb(new Error("Only PDF files are allowed."));
  }

  cb(null, true);
};

export const careerUpload = multer({
  storage,

  limits: {
    // Maximum 1 MB per file
    fileSize: 1 * 1024 * 1024,
  },

  fileFilter,
});
