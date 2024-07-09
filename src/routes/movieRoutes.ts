// src/routes/movieRoutes.ts
import { Router } from "express";
import apicache from "apicache";
import { listMovies, search, createMovie, update, remove } from "../controllers/movieController";
import { isAdmin } from "../utils/authMiddleware";

const router = Router();
const cache = apicache.middleware;

router.get("/movies", cache("1 minutes"), listMovies);
router.get("/search", cache("1 minutes"), search);
router.post("/movies", isAdmin, createMovie);
router.put("/movies/:id", isAdmin, update);
router.delete("/movies/:id", isAdmin, remove);

export default router;
