import multer from "multer";
import path from "path";

// Store files in memory
// No need to save temporary files to disk
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const extension = path.extname(file.originalname).toLowerCase();

  // Resume validation
  if (file.fieldname === "resume") {
    const allowedResumeExtensions = [".pdf", ".doc", ".docx"];

    if (!allowedResumeExtensions.includes(extension)) {
      return cb(new Error("Resume must be PDF, DOC or DOCX."));
    }
  }

  // Address Proof + Marksheet
  if (file.fieldname === "address_proof" || file.fieldname === "marksheet") {
    const allowedDocumentExtensions = [".pdf", ".jpg", ".jpeg", ".png"];

    if (!allowedDocumentExtensions.includes(extension)) {
      return cb(new Error("Documents must be PDF, JPG, JPEG or PNG."));
    }
  }

  cb(null, true);
};

export const careerUpload = multer({
  storage,

  limits: {
    // 5 MB per file
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter,
});
