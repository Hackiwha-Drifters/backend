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
};

export const getNotifications = (req, res) => {
  const user_id = req.query.user_id;
  const condition = user_id ? { user_id: user_id } : {};
  Notification.find(condition)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const getNotificationById = (req, res) => {
  const id = req.params.id;
  Notification.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found Notification with id " + id });
      else res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Notification with id=" + id });
    });
};

export const updateNotification = (req, res) => {
  const id = req.params.id;
  Notification.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Notification with id=${id}. Maybe Notification was not found!`,
        });
      } else
        res
          .status(200)
          .send({ message: "Notification was updated successfully." });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error updating Notification with id=" + id });
    });
};

export const deleteNotification = (req, res) => {
  const id = req.params.id;
  Notification.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Notification with id=${id}. Maybe Notification was not found!`,
        });
      } else {
        res.status(200).send({
          message: "Notification was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Could not delete Notification with id=" + id });
    });
};

export const deleteAllNotifications = (req, res) => {
  Notification.deleteMany({})
    .then((data) => {
      res.status(200).send({
        message: `${data.deletedCount} Notifications were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all Notifications.",
      });
    });
};

export const getNotificationsByUser = (req, res) => {
  const id = req.params.id;
  Notification.find({ user_id: id })
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found Notifications with user_id " + id });
      else res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const getUnreadNotificationsByUser = (req, res) => {
  const id = req.params.id;
  Notification.find({ user_id: id, status: "unread" })
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found Notifications with user_id " + id });
      else res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const markAllNotificationsAsRead = (req, res) => {
  const id = req.params.id;
  Notification.updateMany({ user_id: id }, { status: "read" })
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found Notifications with user_id " + id });
      else
        res.status(200).send({ message: "All notifications marked as read" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const markNotificationAsRead = (req, res) => {
  const id = req.params.id;
  Notification.findByIdAndUpdate(
    id,
    { status: "read" },
    { useFindAndModify: false }
  )
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found Notification with id " + id });
      else res.status(200).send({ message: "Notification marked as read" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
