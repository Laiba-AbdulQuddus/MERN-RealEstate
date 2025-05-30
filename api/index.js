import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

console.log('MONGO URL:', process.env.MONGO);

mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDB connected!');
}   ).catch((err) => {
    console.log('MongoDB connection error:', err);
});

const app = express();
app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});

app.use("/api/user", userRouter); 