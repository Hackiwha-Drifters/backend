import express from "express";
import connectDb from "./config/dbConnection.js";
import dotenv from "dotenv";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";

dotenv.config();
const app = express();

app.use(cors(corsOptions))
app.use(express.json({ extended: false }));

const port = process.env.PORT || 5000; // set port number

connectDb();

import userRouter from "./routes/user.routes.js";
app.use("/users", userRouter);

import appointementRouter from "./routes/appointment.routes.js";
app.use("/appointements", appointementRouter);

import chatBot from "./routes/chatBot.routes.js";
app.use("/chatBot", chatBot);


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Marhaba on HealthBooth backend..." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); // start the server
