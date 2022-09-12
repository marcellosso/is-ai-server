import multer from 'multer'
import path from 'path';

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png']

// TODO Returning original file name for now, on future maybe use UUID
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'src/public/img')
  },
  filename: (req, file, cb) => {
    // const splittedName = file.originalname.split('.');
    // const fileExtension = splittedName[splittedName.length - 1];
    // cb(null, `${file.filename}.${fileExtension}`);
    cb(null, file.originalname);
  }
})

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
  storage,
  fileFilter: (req, file, cb) => {
    if (ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
});

export default upload;