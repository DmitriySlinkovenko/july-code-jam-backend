const mongoose = require("mongoose");
const validator = require("validator");

const cocktailSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
    },
    ingredient1: {
      type: String,
      required: true,
      minlength: 2,
    },
    ingredient2: {
      type: String,
      minlength: 2,
    },
    ingredient3: {
      type: String,
      minlength: 2,
    },
    ingredient4: {
      type: String,
      minlength: 2,
    },
    ingredient5: {
      type: String,
      minlength: 2,
    },
    ingredient6: {
      type: String,
      minlength: 2,
    },
    imageUrl: {
      type: String,
      required: true,
      validate: {
        validator(value) {
          return validator.isURL(value);
        },
        message: "You must enter a valid URL",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cocktails", cocktailSchema);
