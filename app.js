import express from "express";
import connectDb from "./config/dbConnection.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

const port = process.env.PORT || 5000; // set port number

connectDb();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Marhaba on HealthBooth backend..." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); // start the server
