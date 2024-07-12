const Cocktails = require("../models/cocktail");

const BadRequestError = require("../errors/BadRequestError");

const createItem = (req, res, next) => {
  const {
    title,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient5,
    ingredient6,
    imageUrl,
  } = req.body;
  Cocktails.create({
    title,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient5,
    ingredient6,
    imageUrl,
  })
    .then((item) => res.status(200).send({ item }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        next(new BadRequestError("Invalid data."));
      }
      next(err);
    });
};

function getItems(req, res, next) {
  Cocktails.find({})
    .then((items) => res.status(200).send(items))
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  getItems,
  deleteItem,
  createItem,
};
