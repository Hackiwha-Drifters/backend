import db from "../models/index.js";

const Appointment = db.appointment;

// Create and Save a new Appointment
export const createAppointment = (req, res) => {
  // Validate request
  if (!req.body.date) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create an Appointment
  const appointment = new Appointment({
    date: req.body.date,
    time: req.body.time,
    doctor: req.body.doctor,
    patient: req.body.patient,
  });

  // Save Appointment in the database
  appointment
    .save(appointment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message ||
            "Some error occurred while creating the Appointment.",
        });
    });
};

// Retrieve all Appointments from the database.
export const getAppointments = (req, res) => {
  const date = req.query.date;
  const condition = date
    ? { date: { $regex: new RegExp(date), $options: "i" } }
    : {};

  Appointment.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message || "Some error occurred while retrieving appointments.",
        });
    });
};

// Find a single Appointment with an id
export const getAppointmentById = (req, res) => {
  const id = req.params.id;

  Appointment.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found Appointment with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Appointment with id=" + id });
    });
};

// Update a Appointment by the id in the request
export const updateAppointment = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Data to update can not be empty!" });
  }

  const id = req.params.id;

  Appointment.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `Cannot update Appointment with id=${id}. Maybe Appointment was not found!`,
          });
      } else res.send({ message: "Appointment was updated successfully." });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error updating Appointment with id=" + id });
    });
};

// Delete a Appointment with the specified id in the request
export const deleteAppointment = (req, res) => {
  const id = req.params.id;

  Appointment.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `Cannot delete Appointment with id=${id}. Maybe Appointment was not found!`,
          });
      } else {
        res.send({ message: "Appointment was deleted successfully!" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Could not delete Appointment with id=" + id });
    });
};

// Delete all Appointments from the database.
export const deleteAllAppointments = (req, res) => {
  Appointment.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Appointments were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all appointments.",
      });
    });
};

// Find all Appointments with a specific doctor
export const findAppointmentsByDoctor = (req, res) => {
  const doctor = req.query.doctor;
  const condition = doctor
    ? { doctor: { $regex: new RegExp(doctor), $options: "i" } }
    : {};

  Appointment.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message || "Some error occurred while retrieving appointments.",
        });
    });
};

// Find all Appointments with a specific patient
export const findAppointmentsByPatient = (req, res) => {
  const patient = req.query.patient;
  const condition = patient
    ? { patient: { $regex: new RegExp(patient), $options: "i" } }
    : {};

  Appointment.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message || "Some error occurred while retrieving appointments.",
        });
    });
};
