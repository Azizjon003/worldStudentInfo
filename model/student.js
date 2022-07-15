const mongoose = require("mongoose");
//o'quvchi schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  surname: { type: String, restudentSchemaquired: true },
  age: { type: Number, required: true },
  groupId: {
    type: mongoose.Schema.ObjectId,
    ref: "groups",
  },
});

module.exports = mongoose.model("students", studentSchema);
