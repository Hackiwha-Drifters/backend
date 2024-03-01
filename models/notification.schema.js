import mongoose from "mongoose";

const Notification = mongoose.model(
  "Notification",
  new mongoose.Schema({
    user_id: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "unread",
    },
  })
);

export default Notification;
