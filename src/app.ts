// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(movieRoutes);

export default app;
