import multer from "multer";
import multerS3 from 'multer-s3';
import { AWS_BUCKET_NAME } from "../config";
import S3 from "../helpers/s3";

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, 'src/public/img')
//   },
//   filename: (req, file, cb) => {
//     // const splittedName = file.originalname.split('.');
//     // const fileExtension = splittedName[splittedName.length - 1];
//     // cb(null, `${file.filename}.${fileExtension}`);
//     cb(null, file.originalname);
//   }
// })

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
  storage: multerS3({
    s3: S3 as any,
    bucket: AWS_BUCKET_NAME,
    acl: 'public-read',
    cacheControl: 'max-age=31536000',
    key: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`); //use Date.now() for unique file keys
    }
  }),
  fileFilter: (req, file, cb) => {
    if (ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

export default upload;
