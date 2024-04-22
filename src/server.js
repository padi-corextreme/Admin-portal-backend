import express from "express";
import dotenv from "dotenv";
import router from "./routes/accountRoute.js";
import promoRouter from "./routes/promotionRoute.js";
import proRoute from './routes/productRoute.js';
import mongoose from "mongoose";
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

const mongoUrl = process.env.MONGODB_URL;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database is running');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
    process.exit(1); // Exit the process if unable to connect to the database
  });

const PORT = process.env.PORT || 8080;

// Use each router separately
app.use(router);
app.use(promoRouter);
app.use(proRoute);

// Middleware to handle successful upload
app.post('/uploads', (req, res) => {
  // Handle successful upload
  console.log('File uploaded successfully');
  res.status(200).send('File uploaded successfully');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running! ${PORT}`);
});

