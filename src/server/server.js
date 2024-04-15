import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import router from "../routes/allRoutes.js";
import mongoose  from "mongoose";


dotenv.config ()



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cors())

app.use('/', router)



const PORT = process.env.PORT

await mongoose.connect(process.env.MONGO_URI);


app.listen(PORT,()=>{
    console.log(`Server is running! ${PORT}`);
});