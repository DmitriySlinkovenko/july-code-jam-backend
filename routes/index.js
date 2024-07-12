const router = require("express").Router();

const cocktailRouter = require("./cocktails");

const NotFoundError = require("../errors/NotFoundError");

router.use("/items", cocktailRouter);

router.use("*", (req, res, next) =>
  next(new NotFoundError("Route does not exist."))
);

module.exports = router;
