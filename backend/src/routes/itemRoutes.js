const express = require("express");
const router = express.Router();
const { getItems, getSummary } = require("../controllers/itemController");

router.get("/", getItems);
router.get("/summary", getSummary);

module.exports = router;
