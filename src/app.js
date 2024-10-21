import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));


// set the limit of the json body to 50mb
app.use(express.json({ limit: '50mb' }));

// urlencoded body 
app.use(express.urlencoded({ extended: true , limit: '50mb'}));

// for storing the file and image   
app.use(express.static('public'));

// cookie parser
app.use(cookieParser());


export default app;