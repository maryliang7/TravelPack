const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateScheduleInput(data) {
    let errors = {};
    
    data.title = validText(data.title) ? data.title: '';
    data.description = validText(data.description) ? data.description: '';
    data.startDate = validText(data.startDate) ? data.startDate: '';
    data.endDate = validText(data.endDate) ? data.endDate: '';


    if (Validator.isEmpty(data.title)) {
        errors.title = 'Schedule title is required';
    }

    if (Validator.isEmpty(data.startDate)) {
        errors.startDate = 'Start date is required';
    }

    if (Validator.isEmpty(data.endDate)) {
        errors.endDate = 'End date is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}