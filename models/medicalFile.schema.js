import mongoose from "mongoose";

const MedicalFile = mongoose.model(
  "MedicalFile",
  new mongoose.Schema({
    patient_id: {
      type: String,
      required: true,
    },
    doctor_id: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    prescription: {
      type: String,
      required: true,
    },
  })
);

export default MedicalFile;
