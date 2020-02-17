import multer from 'multer';
import crypto from 'crypto';
import { resolve, extname } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'temp', 'uploads'),
    filename: (req, file, callbak) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return callbak(err);

        return callbak(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
