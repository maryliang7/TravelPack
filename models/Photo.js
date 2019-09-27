const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  title: {
    type: String
  },
  attachedPhoto: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Photo = mongoose.model('photos', PhotoSchema);
