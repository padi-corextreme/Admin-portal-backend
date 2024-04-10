import  mongoose from "mongoose";

const schema = mongoose.Schema

const signInSchema = new schema ({
    firstName : {type : String, required : true},

    lastName : {type : String, required : true},

    email : {type : String, required : true},

    password : {type : String, required : true},


});


export const signInModel = mongoose.model ('SignIn', signInSchema)