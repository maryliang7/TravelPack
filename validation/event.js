const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data){
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.description = validText(data.description) ? data.description : '';
    data.address = validText(data.address) ? data.address : '';
    data.cost = validText(data.cost) ? data.cost : '';
    data.time = validText(data.time) ? data.time : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Event title is required';
    }

    if (Validator.isEmpty(data.cost)) {
        errors.cost = 'Event cost is required';
    }

    if (Validator.isEmpty(data.time)) {
        errors.time = 'Event time is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}