import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js';
import userRoute from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';


dotenv.config();

const app = express(); 
app.use(cors({
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true, 
}));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

 
app.use('/api/user',userRoute);
app.use('/api/products',productRouter);

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server is running on port ${PORT}`);
});

