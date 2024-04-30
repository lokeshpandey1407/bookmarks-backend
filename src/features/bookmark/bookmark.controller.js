import BookmarkRepository from "./bookmark.repository.js";

export default class BookmarkController {
  constructor() {
    this.bookmarkRepository = new BookmarkRepository();
  }
  async create(req, res, next) {
    try {
      const bookmark = await this.bookmarkRepository.create(req.body);
      if (!bookmark) {
        return res.status(400).json({
          success: false,
          message: "Error creating bookmark",
        });
      }
      res.status(200).json({
        success: true,
        message: "Successfully created",
        data: bookmark,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const bookmark = await this.bookmarkRepository.update(id, req.body);
      if (!bookmark) {
        return res.status(400).json({
          success: false,
          message: "Error updating bookmark",
        });
      }
      res.status(200).json({
        success: true,
        message: "Successfully updated",
        data: bookmark,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async getById(req, res, next) {
    const { id } = req.params;
    try {
      const bookmark = await this.bookmarkRepository.get(id);
      if (!bookmark) {
        return res
          .status(404)
          .json({ success: false, message: "Bookmark not found" });
      }
      res.status(200).json({ success: true, message: "", data: bookmark });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async getAll(req, res, next) {
    const { search } = req.query;
    try {
      const bookmarks = await this.bookmarkRepository.getAll(search);
      return res
        .status(200)
        .json({ success: true, message: "", data: bookmarks });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      const bookmark = await this.bookmarkRepository.delete(id);
      if (!bookmark) {
        return res.status(404).json({
          success: false,
          message: "Cannot find bookmark with given Id",
        });
      }
      res
        .status(200)
        .json({ success: true, message: "Bookmark deleted successfully" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
