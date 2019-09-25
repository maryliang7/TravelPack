const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  title: {
    type: String
  },
  author_id: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Photo = mongoose.model('photos', PhotoSchema);
