const express = require("express");

const router = express.Router();

const { createItem, getItems } = require("../controllers/news");
const { auth } = require("../middlewares/auth");
const { validateCardBody } = require("../middlewares/validation");

router.use(auth);
router.get("/", getItems);
router.post("/", validateCardBody, createItem);

module.exports = router;
