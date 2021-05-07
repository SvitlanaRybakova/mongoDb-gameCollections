const express = require("express");
const router = express.Router();

const gameController = require("../controllers/gameController");

router.post("/addConsoleToGame", gameController.addConsoleToGame);
router.post("/addGenreToGame", gameController.addGenreToGame);
router.get("", gameController.getAllGames);

module.exports = router;