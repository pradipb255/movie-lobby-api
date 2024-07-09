import { getAllMovies, searchMovies, addMovie, updateMovie, deleteMovie, getOneMovies } from "../services/movieService";
import Movie from "../models/movieModel";

jest.mock("../models/movieModel");

describe("Movie Service", () => {
  it("should get all movies", async () => {
    (Movie.find as jest.Mock).mockResolvedValue([]);
    const movies = await getAllMovies();
    expect(movies).toEqual([]);
  });

  it("should get one movies", async () => {
    (Movie.findById as jest.Mock).mockResolvedValue({});
    const movies = await getOneMovies("1");
    expect(movies).toEqual({});
  });

  it("should search movies", async () => {
    (Movie.find as jest.Mock).mockResolvedValue([]);
    const movies = await searchMovies("test");
    expect(movies).toEqual([]);
  });

  it("should add a new movie", async () => {
    const movie = { title: "Test Movie", genre: "Test", rating: 5, streamingLink: "http://test.com" };
    (Movie.prototype.save as jest.Mock).mockResolvedValue(movie);
    const newMovie = await addMovie(movie);
    expect(newMovie).toEqual(movie);
  });

  it("should update a movie", async () => {
    const movie = { title: "Updated Movie", genre: "Test", rating: 5, streamingLink: "http://test.com" };
    (Movie.findByIdAndUpdate as jest.Mock).mockResolvedValue(movie);
    const updatedMovie = await updateMovie("1", movie);
    expect(updatedMovie).toEqual(movie);
  });

  it("should delete a movie", async () => {
    (Movie.findByIdAndDelete as jest.Mock).mockResolvedValue({});
    await deleteMovie("1");
    expect(Movie.findByIdAndDelete).toHaveBeenCalledWith("1");
  });
});
