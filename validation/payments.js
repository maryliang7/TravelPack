const Validator = require('validator');
const validText = require('./valid-text');

const validAmount = amount => {
  return typeof amount === 'number' && amount > 0;
};

module.exports = function validatePaymentInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.category = validText(data.category) ? data.category : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = 'Category field is required';
  }

  if (validAmount(data.amount)) {
    errors.amount = 'Amount must be a number greater than 0';
  }

  if (Validator.isEmpty(data.chargeeIds)) {
    errors.chargees = 'You must add a participant';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};