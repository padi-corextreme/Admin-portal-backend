import { Router} from "express";
import { createPromotion, deletePromotion, getAllPromotion, updatePromotion } from "../controllers/promotion_controller.js";

const router = Router()

router.post('/api/admin/promotions', createPromotion),

router.get('/api/admin/promotions', getAllPromotion),

router.patch('/api/admin/promotions/:id', updatePromotion),

router.delete('/api/admin/promotions/:id', deletePromotion)

export default router