const mongoose = require("mongoose");
const regionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  districtId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "districts",
    },
  ],
});
const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  regions: [
    {
      body: regionSchema,
    },
  ],
});
// countrySchema.virtual("districts", {});
module.exports = mongoose.model("countries", countrySchema);
//#endregion
