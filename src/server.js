import express from "express";
import dotenv from "dotenv";
import router from './accountRoute.js'
import { mongoose } from "mongoose";
import cors from 'cors'

dotenv.config()



const app = express()
app.use(express.json())


const mongoUrl = process.env.MONGODB_URL
mongoose.connect(mongoUrl).then(()=>{
    console.log('Database is running')
}).catch((error)=>console.log(error))

const PORT = process.env.PORT || 8080;
app.use(router)
app.use(cors())

app.listen(PORT,()=>{
    console.log(`Server is running! ${PORT}`);
});