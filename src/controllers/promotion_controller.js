import { promotionModel } from "../models/promotion.js";

export const createPromotion = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await promotionModel.create(data);
        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
};

export const getAllPromotion = async (req, res, next) => {
    try {
        const data = req.body;
        const findData = await promotionModel.find(data);
        res.json(findData);
    } catch (error) {
        next(error);
    }
};

export const updatePromotion = async (req, res, next) => {
    try {
        const id = req.params.id;
        const promotionUpdate = await promotionModel.findByIdAndUpdate(id);
        res.json(promotionUpdate);
    } catch (error) {
        next(error);
    }
};

export const deletePromotion = async (req, res, next) => {
    try {
        const id = req.params.id;
        const promotionDelete = await promotionModel.findByIdAndDelete(id);
        res.json(promotionDelete);
    } catch (error) {
        next(error);
    }
};
