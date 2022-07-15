const route = require("express").Router();
const student = require("../controller/studentController");
route.route("/").get(student.getAllStudent).post(student.addStudent);
route
  .route("/:id")
  .get(student.getOneStudent)
  .patch(student.updateStudent)
  .delete(student.deleteStudent);
module.exports = route;
