import express from "express";
import verifyToken from "../middlewares/authJwt.js";

import chatBot from "../controllers/chatBot.controller.js";

const router = express.Router();

router.get("/", [verifyToken], chatBot);

export default router;
