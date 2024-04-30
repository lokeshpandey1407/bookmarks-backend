import express from "express";
import cors from "cors";
import MongooseConnect from "./src/config/mongoose.config.js";
import { errorHandler } from "./src/middleware/errorHandler.middleware.js";
import BookmarkRoutes from "./src/features/bookmark/bookmark.routes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/bookmark", BookmarkRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .json({ status: false, message: "API not found, Please check the API" });
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Application is listening on port ${process.env.PORT}`);
  MongooseConnect();
});
