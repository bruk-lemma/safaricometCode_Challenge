const mongoose = require("mongoose");

// Define the employee schema
const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

// Create the employee model
module.exports = mongoose.model("Song", songSchema);
