const mongoose = require("mongoose");
const regionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  countryId: {
    type: mongoose.Schema.ObjectId,
    ref: "countries",
  },
});
// countrySchema.virtual("districts", {});
module.exports = mongoose.model("regions", regionSchema);
//#endregion
