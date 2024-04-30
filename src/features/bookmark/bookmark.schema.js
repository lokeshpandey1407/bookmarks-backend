import mongoose from "mongoose";

const BookmarkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  tags: [{ type: String, required: true }],
  description: { type: String },
});

const BookmarkModel = mongoose.model("Bookmark", BookmarkSchema);
export default BookmarkModel;
