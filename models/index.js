import mongoose from "mongoose";
mongoose.Promise = global.Promise;
import User from "./user.schema.js";
import Notification from "./notification.schema.js";
import MedicalFile from "./medicalFile.schema.js";
import Appointment from "./appointment.schema.js";
const db = {};

db.mongoose = mongoose;

db.user = User;
db.notification = Notification;
db.medicalFile = MedicalFile;
db.appointment = Appointment;


export default db;
