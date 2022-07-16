const mongoose = require("mongoose");
//tuman schema
const districtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  regionId: {
    type: mongoose.Schema.ObjectId,
    ref: "regions",
  },
});

module.exports = mongoose.model("districts", districtSchema);
