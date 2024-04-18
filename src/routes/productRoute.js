import { Router } from "express";
import { addProduct, deleteProduct, getProduct, getProducts, patchProduct } from "../controllers/productController";



const router = Router ()

router.post('/api/admin/products', addProduct)

router.get('/api/admin/products', getProducts)

router.get('/api/admin/product/:id', getProduct)

router.patch('/api/admin/product/:id', patchProduct)

router.delete('/api/admin/product/:id', deleteProduct)