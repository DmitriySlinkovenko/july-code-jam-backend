const express = require("express");

const router = express.Router();

const { createItem, getItems } = require("../controllers/news");
const { validateCardBody } = require("../middlewares/validation");

router.get("/", getItems);
router.post("/", validateCardBody, createItem);

module.exports = router;
