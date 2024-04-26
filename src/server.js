import express from "express";
import dotenv from "dotenv";
import router from "./routes/accountRoute.js";
import promoRouter from "./routes/promotionRoute.js";
import proRoute from './routes/productRoute.js'
import { mongoose } from "mongoose";
import cors from 'cors'

dotenv.config()



const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'));


const mongoUrl = "mongodb+srv://padi-app:padi-app@lyril.p1yidoa.mongodb.net/padi-app?retryWrites=true&w=majority&appName=Lyril"
mongoose.connect(mongoUrl).then(() => {
    console.log('Database is running')
}).catch((error) => console.log(error))

const PORT = process.env.PORT || 8080;


app.use(router)
app.use(promoRouter)
app.use(proRoute)



app.listen(PORT, () => {
    console.log(`Server is running! ${PORT}`);
});