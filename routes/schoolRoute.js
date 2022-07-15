const route = require("express").Router();
const school = require("../controller/schoolController");
route.route("/").get(school.getAllSchool).post(school.addSchool);
route
  .route("/:id")
  .get(school.getOneSchool)
  .patch(school.updateSchool)
  .delete(school.deleteSchool);
module.exports = route;
