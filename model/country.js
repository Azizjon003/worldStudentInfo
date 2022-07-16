const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);
countrySchema.virtual("regions", {
  ref: "regions",
  localField: "_id",
  foreignField: "countryId",
});

module.exports = mongoose.model("countries", countrySchema);
//#endregion
