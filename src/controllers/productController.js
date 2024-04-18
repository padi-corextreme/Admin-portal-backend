import { productModel } from "../models/products.js";

export const addProduct = async (res, req)=>{
    try {
        const data = req.body
        const postProduct = await productModel.create(data)
        res.json(postProduct)
    } catch (error) {
        console.log(error)
    }
    

}

export const getProducts = async (res, req) =>{
    try {
        const data = req.body
        const fetchProducts = await productModel.find(data)
        res.json(fetchProducts)
    } catch (error) {
        console.log(error)
    }
}


export const getProduct = async (res,req) => {
    try {
        const id = req.params.id
        const fetchProduct = await productModel.findById(id)
        res.json(fetchProduct)
    } catch (error) {
        
        console.log(error)
    }
}

export const patchProduct = async (res,req) => {
    try {
        const id = req.params.id
        const updateProduct = await productModel.findByIdAndUpdate(id)
        res.json(updateProduct)
    } catch (error) {
        console.log(error)
    }
}


export const deleteProduct = async (res, req) =>{
    try {
        const id = req.params.id
        const removeProduct = await productModel.findByIdAndDelete(id)
        res.json(removeProduct)
        
    } catch (error) {
        console.log(error)
    }
}