import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js';
import userRoute from './routes/userRouter.js';


dotenv.config();

const app = express(); 
app.use(cors({
        origin: process.env.FRONTEND_URL,
        credentials: true, 
}));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser())

app.use('/api/user',userRoute)

const PORT = 8080 || process.env.PORT
  
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
