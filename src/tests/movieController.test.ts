import { Request, Response } from "express";
import { listMovies, search, createMovie, update, remove } from "../controllers/movieController";
import * as movieService from "../services/movieService";

jest.mock("../services/movieService");

describe("Movie Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let json: jest.Mock;
  let status: jest.Mock;

  beforeEach(() => {
    req = {};
    json = jest.fn();
    status = jest.fn(() => ({ json }));
    res = { status, json };
  });

  it("should list all movies", async () => {
    (movieService.getAllMovies as jest.Mock).mockResolvedValue([]);
    await listMovies(req as Request, res as Response);
    expect(movieService.getAllMovies).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({data: []});
  });

  it("should search movies", async () => {
    req.query = { q: "test" };
    (movieService.searchMovies as jest.Mock).mockResolvedValue([]);
    await search(req as Request, res as Response);
    expect(movieService.searchMovies).toHaveBeenCalledWith("test");
    expect(res.json).toHaveBeenCalledWith({data: []});
  });

  it("should create a new movie", async () => {
    req.body = { title: "Test Movie", genre: "Test", rating: 5, streamingLink: "http://test.com" };
    (movieService.addMovie as jest.Mock).mockResolvedValue(req.body);
    await createMovie(req as Request, res as Response);
    expect(movieService.addMovie).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({data: req.body});
  });

  it("should update a movie", async () => {
    req.params = { id: "1" };
    req.body = { title: "Updated Movie", genre: "Test", rating: 5, streamingLink: "http://test.com" };
    (movieService.updateMovie as jest.Mock).mockResolvedValue(req.body);
    (movieService.getOneMovies as jest.Mock).mockResolvedValue("1");
    await update(req as Request, res as Response);
    expect(movieService.getOneMovies).toHaveBeenCalledWith("1");
    expect(movieService.updateMovie).toHaveBeenCalledWith("1", req.body);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });

  it("should delete a movie", async () => {
    req.params = { id: "1" };
    (movieService.deleteMovie as jest.Mock).mockResolvedValue({});
    await remove(req as Request, res as Response);
    expect(movieService.deleteMovie).toHaveBeenCalledWith("1");
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
