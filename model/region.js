const mongoose = require("mongoose");
const regionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    countryId: {
      type: mongoose.Schema.ObjectId,
      ref: "countries",
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);
regionSchema.virtual("districts", {
  ref: "districts",
  localField: "_id",
  foreignField: "regionId",
});
module.exports = mongoose.model("regions", regionSchema);
//#endregion
