const route = require("express").Router();
const Region = require("../controller/regionController");
const country = require("../controller/countryController");
route.route("/").get(Region.getAllRegion).post(Region.addRegion);
route
  .route("/:id")
  .get(Region.getOneRegion)
  .patch(Region.updateRegion)
  .delete(Region.deleteRegion);
route.route("/regions/:id/districts").get(country.getOneCountryByRegion);
module.exports = route;
