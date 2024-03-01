import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    Nom: { type: String, required: true },
    Prenom: {
      type: String,
      required: true,
    },
    Username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    roles: {
      type: String,
      default: "patient",
    },
    Speciality: {
      type: String,
    },
    PhoneNumber: {
      type: Number,
    },
  })
);
export default User;
