import express from "express";
import BookmarkController from "./bookmark.controller.js";
import validateBookmarkData from "../../middleware/validators/bookmarkValidation.middleware.js";

const BookmarkRoutes = express.Router();
const bookmarkController = new BookmarkController();

//Create
BookmarkRoutes.post("/", (req, res, next) => {
  validateBookmarkData;
  bookmarkController.create(req, res, next);
});

//Update
BookmarkRoutes.put("/:id", validateBookmarkData, (req, res, next) => {
  bookmarkController.update(req, res, next);
});

//Get
BookmarkRoutes.get("/:id", (req, res, next) => {
  bookmarkController.getById(req, res, next);
});

//Get All
BookmarkRoutes.get("/", (req, res, next) => {
  bookmarkController.getAll(req, res, next);
});

//Delete
BookmarkRoutes.delete("/:id", (req, res, next) => {
  bookmarkController.delete(req, res, next);
});

export default BookmarkRoutes;
