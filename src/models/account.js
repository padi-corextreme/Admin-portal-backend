import mongoose from 'mongoose'


const schema = mongoose.Schema;

// creating account tables
const accountSchema = new schema({
    firstName: {type: String, required:true },
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true, lowercase: true,},
    password: {type: String, required: true, minlength: 6},
    country: {type: String, required: true},
    address: {type: String,},
    companyName: {type: String, required: true},
    contact: {type: String, required: true}
})

export const accountModel = mongoose.model('account', accountSchema)