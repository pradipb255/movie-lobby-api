// src/services/movieService.ts
import Movie from "../models/movieModel";

export const getAllMovies = async () => {
  return await Movie.find();
};

export const getOneMovies = async (id: string) => {
  return await Movie.findById(id);
};

export const searchMovies = async (query: string) => {
  return await Movie.find({ $or: [{ title: new RegExp(query, "i") }, { genre: new RegExp(query, "i") }] });
};

export const addMovie = async (movie: object) => {
  const newMovie = new Movie(movie);
  return await newMovie.save();
};

export const updateMovie = async (id: string, movie: object) => {
  return await Movie.findByIdAndUpdate(id, movie, { new: true });
};

export const deleteMovie = async (id: string) => {
  return await Movie.findByIdAndDelete(id);
};
