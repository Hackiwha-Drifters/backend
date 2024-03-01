import jwt from "jsonwebtoken";

export const verifyRoleDoctor = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    if (user.role !== "doctor") {
      return res.status(403).send({ message: "Require Doctor Role!" });
    }
    req.userId = user.id;
    next();
  });
};

export const verifyRoleAdmin = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    if (user.role !== "admin") {
      return res.status(403).send({ message: "Require Admin Role!" });
    }
    req.userId = user.id;
    next();
  });
};

export const verifyRolePatient = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    if (user.role !== "patient") {
      return res.status(403).send({ message: "Require Patient Role!" });
    }
    req.userId = user.id;
    next();
  });
};
