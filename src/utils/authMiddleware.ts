// src/utils/authMiddleware.ts
import { Request, Response, NextFunction } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const role = req.header("role");
  if (role === "admin") {
    next();
  } else {
    res.status(403).json({ error: "Forbidden" });
  }
};
