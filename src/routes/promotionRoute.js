import { Router } from 'express';
import multer from 'multer';
import { createPromotion, deletePromotion, getAllPromotion, updatePromotion } from '../controllers/promotion_controller.js';

const router = Router();

// Set up multer storage for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where uploaded images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original filename for the uploaded image
  }
});

const upload = multer({ storage: storage });

// Route for creating promotions with file uploads
router.post('/api/admin/promotions', upload.single('image'), createPromotion);

// Other routes remain unchanged
router.get('/api/admin/promotions', getAllPromotion);
router.patch('/api/admin/promotions/:id', updatePromotion);
router.delete('/api/admin/promotions/:id', deletePromotion);

export default router;
