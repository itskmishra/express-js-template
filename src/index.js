import dotenv from 'dotenv';
// imports here
import app from './app.js';
import connectDB from './db/connect_db.js';

// loading env var's
dotenv.config();

// connect database here and then start server
connectDB()
    .then(() => {
        // can check for error of server here using check error
        app.listen(process.env.PORT, () => {
            // log here whatever we want
        })
    })
    .catch((err) =>{
        console.log("INDEX: DB CONNECTION:", err);
    })

