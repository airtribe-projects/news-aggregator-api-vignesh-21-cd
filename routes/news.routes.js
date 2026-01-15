const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const { getNews } = require("../controllers/news.controller");

const router = express.Router();

router.get("/news", authMiddleware, getNews);

module.exports = router;
