const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePackInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.password = validText(data.password) ? data.password : '';
  // data.startDate = validText(data.startDate) ? data.startDate : '';
  // data.endDate = validText(data.endDate) ? data.endDate : '';

  if (!Validator.isLength(data.name, { min: 2})) {
    errors.name = 'Pack name must be at least 2 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Pack name is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  // if (Validator.isEmpty(data.startDate)) {
  //   errors.startDate = 'Start date is required';
  // }

  // if (Validator.isEmpty(data.endDate)) {
  //   errors.endDate = 'End date is required';
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};