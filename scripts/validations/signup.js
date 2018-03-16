var Validator = require("validator");
var isEmpty = require("lodash.isempty");

// validateInput function for signup
module.exports = function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = "**This field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "**This field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
