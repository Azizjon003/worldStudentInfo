const route = require("express").Router();
const district = require("../controller/districtController");
route.route("/").get(district.getAllDistrict).post(district.addDistrict);
route
  .route("/:id")
  .get(district.getOneDistrict)
  .patch(district.updateDistrict)
  .delete(district.deleteDistrict);

// route.route("/country")
module.exports = route;
