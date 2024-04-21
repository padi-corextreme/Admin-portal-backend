import mongoose from "mongoose";

const schema = mongoose.Schema;

const productSchema = new schema({
productName: {type: "String", required: true},
description:{type: "String", required: true},
image: {type:"String", required: true},
categories: {type:"String", enum:['clothing','home appliances','fashion', 'furniture','groceries']},
createdBy: {type: mongoose.Types.ObjectId, required: true},
}, {timestamps: true})


export const productModel = mongoose.model('product', productSchema, 'products')