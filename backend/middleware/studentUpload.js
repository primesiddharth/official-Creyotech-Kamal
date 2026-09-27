import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const extension = path.extname(file.originalname).toLowerCase();
  const allowedExtensions = [".jpg", ".jpeg", ".png"];
  const allowedMimeTypes = ["image/jpeg", "image/png"];

  if (
    !allowedExtensions.includes(extension) ||
    !allowedMimeTypes.includes(file.mimetype)
  ) {
    return cb(new Error("Image must be JPG or PNG."));
  }

  cb(null, true);
};

export const studentUpload = multer({
  storage,
  limits: { fileSize: 500 * 1024 },
  fileFilter,
});