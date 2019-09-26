const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  spotterId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  chargeeIds: {
    type: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    default: []
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = Payment = mongoose.model('payments', PaymentSchema);