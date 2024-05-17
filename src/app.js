import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { jsonSize } from "./constant";
const app = express();


var corsOptions = {
  origin: process.env.CROSS_ORIGIN,
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json({limit: jsonSize}))
app.use(express.urlencoded({extended: true, limit: jsonSize}))
app.use(express.static("public"));
app.use(cookieParser());


export { app }