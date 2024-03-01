import db from "../models/index.js";

const Notification = db.notification;
const User = db.user;

export const createNotification = (req, res) => {
    const notification = new Notification({
        user_id: req.body.user_id,
        date: req.body.date,
        message: req.body.message,
        status: req.body.status,
    });
    
    notification
        .save(notification)
        .then((data) => {
        res.status(200).send(data);
        })
        .catch((err) => {
        res.status(500).send({ message: err.message });
        });
    }