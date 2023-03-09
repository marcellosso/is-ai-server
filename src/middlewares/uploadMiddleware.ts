import multer from "multer";
import multerS3 from 'multer-s3';
import { AWS_BUCKET_NAME } from "../config";
import S3 from "../helpers/s3";

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const upload = multer({
  storage: multerS3({
    s3: S3 as any,
    bucket: AWS_BUCKET_NAME,
    acl: 'public-read',
    cacheControl: 'max-age=31536000',
    key: function (req, file, cb) {
      console.log(file)
        cb(null, `${Date.now()}-${file.originalname}`); //use Date.now() for unique file keys
    }
  }),
  fileFilter: (req, file, cb) => {
    console.log(file)
    if (ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

export default upload;
