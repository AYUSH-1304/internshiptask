const express = require("express");
const router = express.Router();

const { generateLetter } = require("../controller/aiController");

router.post("/cover-letter", generateLetter);

module.exports = router;