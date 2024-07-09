// src/server.ts
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/movie_lobby";

mongoose.connect(MONGODB_URI, { })
  .then(() => {
    console.log("database connect successfully !!!");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error("Database connection error:", error);
  });
