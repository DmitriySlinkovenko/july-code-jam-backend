const { Joi, celebrate } = require("celebrate");
const validator = require("validator");

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

module.exports.validateCardBody = celebrate({
  body: Joi.object().keys({
    imageUrl: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "imageUrl" field must be filled in',
      "string.uri": 'the "imageUrl" field must be a valid url',
    }),
    title: Joi.string().required().messages({
      "sting.empty": "Field is required",
    }),
    ingredient1: Joi.string().required().messages({
      "string.empty": "Field is required",
    }),
    ingredient1: Joi.string().messages({
      "string.empty": "Field is empty",
    }),
    ingredient1: Joi.string().messages({
      "string.empty": "Field is empty",
    }),
    ingredient1: Joi.string().messages({
      "string.empty": "Field is empty",
    }),
    ingredient1: Joi.string().messages({
      "string.empty": "Field is empty",
    }),
    ingredient1: Joi.string().messages({
      "string.empty": "Field is empty",
    }),
  }),
});
