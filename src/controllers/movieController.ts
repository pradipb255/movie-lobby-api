// src/controllers/movieController.ts
import { Request, Response } from "express";
import { getAllMovies, searchMovies, addMovie, updateMovie, deleteMovie, getOneMovies } from "../services/movieService";

export const listMovies = async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();
    res.json({ data: movies});
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const search = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;
    const movies = await searchMovies(query);
    res.json({ data: movies});
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createMovie = async (req: Request, res: Response) => {
  try {
    const movie = await addMovie(req.body);
    res.status(201).json({ data: movie });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const movieData = await getOneMovies(id);

    if(!movieData) {
      return res.status(412).send({ message: "Movie not exist" });
    }

    const movie = await updateMovie(id, req.body);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const isDeleted = await deleteMovie(id);

    if (isDeleted) {
      res.status(200).send({ message: "Movie data removed successfully" });
    } else {
      res.status(404).send({ message: "Movie not exist" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
