import mongoose from "mongoose";
mongoose.Promise = global.Promise;
import User from "./user.schema.js";
const db = {};

db.mongoose = mongoose;

db.user = User;

export default db;
