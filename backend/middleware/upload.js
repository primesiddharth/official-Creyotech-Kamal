import multer from "multer";
import path from "path";

// Store files in memory
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const extension = path.extname(file.originalname).toLowerCase();

  // Resume: PDF only
  if (file.fieldname === "resume") {
    if (extension !== ".pdf" || file.mimetype !== "application/pdf") {
      return cb(new Error("Resume must be a PDF file."));
    }
  }

  // Education & Government ID: PDF, JPG, JPEG, PNG
  else if (file.fieldname === "marksheet" || file.fieldname === "address_proof") {
    const allowedExtensions = [".pdf", ".jpg", ".jpeg", ".png"];
    const allowedMimeTypes = ["application/pdf", "image/jpeg", "image/png"];

    if (
      !allowedExtensions.includes(extension) ||
      !allowedMimeTypes.includes(file.mimetype)
    ) {
      return cb(
        new Error(
          "Education and Government ID must be PDF, JPG, JPEG, or PNG.",
        ),
      );
    }
  }

  // Reject unexpected fields
  else {
    return cb(new Error("Invalid upload field."));
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
