import mongoose from "mongoose";

const arrayRoles = ["patient", "doctor", "admin"];

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
    sexe: {
      type: String,
      enum: ["male", "female"],
      default: "male",
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
      enum: arrayRoles,
      default: "patient",
    },
    Speciality: {
      type: String,
    },
    PhoneNumber: {
      type: Number,
    },
    rating: {
      type: Number,
      default: 0,
    },
    avatar: {
      type: String,
      default:
        "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
    },
    subscriptionType: {
      type: String,
      default: "free",
    },
    subscriptionStartDate: {
      type: Date,
      default: Date.now,
    },
    subscriptionEndDate: {
      type: Date,
    },
    // tempMeasures: {
    //   type: Array,
    //   default: [],
    // },
  })
);
export default User;
