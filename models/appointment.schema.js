import mongoose from "mongoose";

// Schéma pour les rendez-vous

const Appointment = mongoose.model(
  "Appointment",
  new mongoose.Schema({
    doctor_id: {
      type: String,
      required: true,
    },
    patient_id: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    type: {
      type: String,
      enum: ["online", "onsite"],
      default: "onsite",
    },
  })
);

export default Appointment;
