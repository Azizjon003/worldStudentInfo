const route = require("express").Router();
const country = require("../controller/countryController");
route.route("/").get(country.getAllCountry).post(country.addCountry);
route
  .route("/:id")
  .get(country.getOneCountry)
  .patch(country.updateCountry)
  .delete(country.deleteCountry);

module.exports = route;
