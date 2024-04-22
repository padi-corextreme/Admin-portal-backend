import mongoose from "mongoose";

const schema = mongoose.Schema;

const promotionSchema = new schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    discountType: { type: String, required: true },
    discountAmount: { type: Number, required: true },
    categories: { type: String, enum: ['clothing', 'home appliances', 'fashion', 'furniture', 'groceries'] },
    /*createdBy: { type: mongoose.Types.ObjectId, required: true },*/
}, {
    timestamps: true
})

export const promotionModel = mongoose.model('promotion', promotionSchema);
