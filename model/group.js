const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.ObjectId,
    ref: "schools",
  },
});

module.exports = mongoose.model("groups", groupSchema);
