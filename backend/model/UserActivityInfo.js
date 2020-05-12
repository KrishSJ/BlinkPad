const mongoose = require("mongoose");
var Schema = mongoose.Schema;
//Schema
const userActivitySchema = new mongoose.Schema({
  id: {
    type: String,
  },
  score: {
    type: Number,
  },
  imageURI: {
    type: String,
  },
});

module.exports = mongoose.model("userActivity", userActivitySchema);
