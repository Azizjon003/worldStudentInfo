const route = require("express").Router();
const group = require("../controller/groupController");
route.route("/").get(group.getAllGroup).post(group.addGroup);
route
  .route("/:id")
  .get(group.getOneGroup)
  .patch(group.updateGroup)
  .delete(group.deleteGroup);
module.exports = route;
