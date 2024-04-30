export default function validateBookmarkData(req, res, next) {
  const { url } = req.body;
  const urlPattern = /^(http|https):\/\/[^ "]+$/;

  if (!url || !url.match(urlPattern)) {
    return res.status(400).json({ success: false, message: "Invalid URL" });
  }
  next();
}
