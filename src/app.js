import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

// cors options
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    credentials: true
}

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded());
app.use(cors(corsOptions));
app.use(cookieParser());

// import routes and other things to use

export default app;









