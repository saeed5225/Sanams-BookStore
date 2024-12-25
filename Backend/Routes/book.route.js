import express from "express";
import { addBook, getBook } from "../Controller/book.controller.js";
import verifyUser from "../verifyUser.js";

const router = express.Router();
router.get("/auth/", verifyUser, getBook);
router.get("/", getBook);
router.post("/add", addBook);

export default router;
