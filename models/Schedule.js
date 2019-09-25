const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({ 
    packId = {
        type: Number,
        required: true
    },
    title = {
        type: String,
        required: true
    },
    description = {
        type: String,
        required: true
    },
    events = {
        type: [Event],
        required: true
    },
    date = {
        type: Date,
        default: Date.now
    }
})


module.exports = Schedule = mongoose.model('schedules', ScheduleSchema);