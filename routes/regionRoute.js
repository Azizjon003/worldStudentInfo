const route = require("express").Router();
const Region = require("../controller/regionController");
route.route("/").get(Region.getAllRegion).post(Region.addRegion);
route
  .route("/:id")
  .get(Region.getOneRegion)
  .patch(Region.updateRegion)
  .delete(Region.deleteRegion);
module.exports = route;
