const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Schedule = require('./Schedule');
// const Payment = require('./Payment');
// const Photo = require('./Photo');


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
  schedules: {
    type: [Schedule.schema]
  },
  // payments: {
  //   type: [Payment.schema]
  // },
  // photos: {
  //   type: [Photo.schema]
  // },
  startDate: {
    type: Date,
    default: Date.now,
    // required: true
  },
  endDate: {
    type: Date,
    // required: true
  }
}, {
  timestamps: true
})

module.exports = Pack = mongoose.model('packs', PackSchema);
