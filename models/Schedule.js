const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Event = require('./Event');

const ScheduleSchema = new Schema({ 
    title: {
        type: String,
        required: true
    },
    // events: {
    //     type: [Event.schema]
    // },
    startDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
},
    {
        timestamps: true
})


module.exports = Schedule = mongoose.model('schedules', ScheduleSchema);