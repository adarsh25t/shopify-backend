const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db.js');
const userRoute = require('./routes/userRouter.js');
const productRouter = require('./routes/productRouter.js');


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

