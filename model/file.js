// models/Image.js

const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageData: {
    type: Buffer, // Data type for storing binary data
    required: true
  }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
