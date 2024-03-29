import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import express from "express";

const app = express();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);

    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    // app.on("error", (error) => {
    //   console.log("ERR: ", error);
    //   throw error;
    // });

    // app.listen(process.env.PORT, () => {
    //   console.log(`App is listening in port ${process.env.PORT}`);
    // });
  } catch (error) {
    console.error("MONGODB CONNECTION ERROR: ", error);
    process.exit();
  }
};


export default connectDB;