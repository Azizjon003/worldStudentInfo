const mongoose = require("mongoose");
// maktab schema
const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  districtId: {
    type: mongoose.Schema.ObjectId,
    ref: "districts",
  },
});

module.exports = mongoose.model("schools", schoolSchema);
