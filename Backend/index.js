import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import bookRoute from "./Routes/book.route.js";
import userRoute from "./Routes/user.route.js";

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

const port = process.env.PORT || 4001;
const mongo = process.env.MONGODBURL;

try {
  mongoose.connect(mongo);
  console.log("Connected to Database Succesully");
} catch (err) {
  console.log(err);
}

app.use("/book/", bookRoute);
app.use("/user/", userRoute);
app.listen(port, () => {
  console.log(`Running on Port No. ${port}\n`);
});
