import express from "express";
import chatBot from "../controllers/chatBot.controller.js";

const router = express.Router();

router.get("/", chatBot);

export default router;
