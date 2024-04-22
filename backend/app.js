import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbconnection } from './database/dbconnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'

dotenv.config({ path: './config/config.env' });

const app = express();
const port = process.env.PORT || 8080;

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        method: ["POST"],
        credentials: true,
    })
);

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/reservation', reservationRouter);


app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
dbconnection();







export default app;
