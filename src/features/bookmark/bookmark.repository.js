import BookmarkModel from "./bookmark.schema.js";

export default class BookmarkRepository {
  async create(bookmark) {
    return await new BookmarkModel(bookmark).save();
  }

  async update(id, data) {
    return await BookmarkModel.findByIdAndUpdate(id, data, { new: true });
  }

  async get(id) {
    return await BookmarkModel.findById(id);
  }

  async getAll(search) {
    return await BookmarkModel.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { tags: { $elemMatch: { $regex: search, $options: "i" } } },
      ],
    });
  }

  async delete(id) {
    return await BookmarkModel.findByIdAndDelete(id);
  }
}
