const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Event = require('./Event');

const ScheduleSchema = new Schema({ 
  title: {
    type: String,
    required: true
  },
  events: {
    type: [Event.schema],
    default: [],
    required: true
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: Date.now
  },
},
  {
    timestamps: true
})


module.exports = Schedule = mongoose.model('schedules', ScheduleSchema);