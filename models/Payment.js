const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  packId: {
    type: Integer,
    required: true
  },
  spotterId: {
    type: Integer,
    required: true
  },
  chargeeIds: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Double,
    required: true
  },
});

module.exports = Payment = mongoose.model('users', PaymentSchema);