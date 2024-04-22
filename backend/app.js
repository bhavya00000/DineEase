import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbconnection } from './database/dbconnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

dotenv.config({ path: './config/config.env' });

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

// Error middleware
app.use(errorMiddleware);

// Database connection
dbconnection();

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

export default app;
