const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
// countrySchema.virtual("districts", {});
module.exports = mongoose.model("countries", countrySchema);
//#endregion
