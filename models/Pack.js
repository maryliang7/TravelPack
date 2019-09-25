const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackSchema = new Schema({
  packLeader: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  members: {
    type: [{ type: Schema.Types.ObjectId, ref: 'users'}],
    default: []
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
})

module.exports = Pack = mongoose.model('packs', PackSchema);
