import { promotionModel } from "../models/promotion.js";


// creating the promotion controller

export const createPromotion = async (req, res, next) => {
    try {
        const data = req.body
        const response = await promotionModel.create({
            ...data,
            image: req.file.filename
        })
        res.status(202).json(response)
    } catch (error) {
        next(error)
       res.status(500).send({error})
    }
    
}

export const getAllPromotion = async (req, res,next) =>{
    try {
        const data = req.body
        const findData = await promotionModel.find(data)
        res.json(findData)
    } catch (error) {
       next(error) 
    }
}

 
export const updatePromotion = async (req, res, next) => {
    try {
        const id = req.params.id
        const promotionUpdate = await promotionModel.findByIdAndUpdate(id)
        res.json(promotionUpdate)
    } catch (error) {
        next(error)
    }
}


 
export const deletePromotion = async (req, res, next) => {
    try {
        const id = req.params.id
        const promotionDelete = await promotionModel.findByIdAndUpdate(id)
        res.json(promotionDelete)
    } catch (error) {
        next(error)
    }
}