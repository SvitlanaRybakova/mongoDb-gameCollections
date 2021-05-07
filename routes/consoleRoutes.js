const express = require("express");
const router = express.Router();

const consoleController = require("../controllers/consoleController");

router.get("", consoleController.getAllConsoles);

module.exports = router;