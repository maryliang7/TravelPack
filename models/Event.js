const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    cost: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
},
    {
        timestamps: true
    }
)

module.exports = Events = mongoose.model('events', EventSchema);