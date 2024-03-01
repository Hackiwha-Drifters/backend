import express from "express";
import verifyToken from "../middlewares/authJwt.js";

import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from "../controllers/appointment.controller.js";

const router = express.Router();

router.post("/", [verifyToken], createAppointment);
router.get("/", [verifyToken], getAppointments);
router.get("/:id", [verifyToken], getAppointmentById);
router.put("/:id", [verifyToken], updateAppointment);
router.delete("/:id", [verifyToken], deleteAppointment);

export default router;
