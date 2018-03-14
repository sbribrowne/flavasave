var Validator = require("validator");
var isEmpty = require("lodash.isempty");

// validateInput function for login on the client side
module.exports = function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = "This field is required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "This field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
