import express from "express";
import verifyToken from "../middlewares/authJwt.js";

import {
  createNotification,
  getNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification,
} from "../controllers/notification.controller.js";

const router = express.Router();

router.post("/", [verifyToken], createNotification);
router.get("/", [verifyToken], getNotifications);
router.get("/:id", [verifyToken], getNotificationById);
router.put("/:id", [verifyToken], updateNotification);
router.delete("/:id", [verifyToken], deleteNotification);

export default router;
