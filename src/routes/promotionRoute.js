import { Router } from 'express';
import multer from 'multer';
import { createPromotion, deletePromotion, getAllPromotion, updatePromotion } from '../controllers/promotion_controller.js';

const router = Router();

// Set up multer storage for handling file uploads
const upload = multer({dest: 'uploads/images'});

// Route for creating promotions with file uploads
router.post('/api/admin/promotions', upload.single('image'), createPromotion);

// Other routes remain unchanged
router.get('/api/admin/promotions', getAllPromotion);
router.patch('/api/admin/promotions/:id', updatePromotion);
router.delete('/api/admin/promotions/:id', deletePromotion);

export default router;
