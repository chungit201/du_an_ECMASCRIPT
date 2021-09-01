import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
const app = express();


mongoose.connect(
    process.env.MONGO_URI, { useFindAndModify: false }, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('DB Connected'),)

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});
app.use(express.json());
app.use(cors({ credentials: 'same-origin' }));

const productRouter = require('./router/product');
const categoryRoutes = require('./router/categories');
const blogRouter = require('./router/post')
const userRouter = require('./router/user')
const authRoutes = require('./router/auth');

app.use('/api',productRouter)
app.use('/api', categoryRoutes)
app.use('/api', authRoutes);
app.use('/api', blogRouter);
app.use('/api',userRouter)
 const port = process.env.PORT || 8000;
 app.listen(port,()=>{
     console.log('Sever is running on port' ,port);
 })

