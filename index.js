import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js';
import userRoute from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';


dotenv.config();

const app = express(); 
// app.use(cors({
//         origin: process.env.FRONTEND_URL,
//         credentials: true, 
// }));
// app.use(express.json({ limit: '50mb' }));
// app.use(cookieParser())

// app.use('/api/user',userRoute);
// app.use('/api/products',productRouter);

const PORT = 8080 || process.env.PORT;

app.get('/',(req, res) => {
    res.send('Server is running')
})
  
app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server is running on port ${PORT}`);
});

