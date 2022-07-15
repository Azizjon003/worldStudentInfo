const Student = require("../model/student");
const {
  getall,
  getOne,
  addData,
  updateData,
  deleteData,
} = require("./handlerController");
const getAllStudent = (req, res) => {
  getall(req, res, Student);
};
const getOneStudent = (req, res) => {
  getOne(req, res, Student);
};
const addStudent = (req, res) => {
  addData(req, res, Student);
};
const updateStudent = (req, res) => {
  updateData(req, res, Student);
};

const deleteStudent = (req, res) => {
  deleteData(req, res, Student);
};

module.exports = {
  getAllStudent,
  getOneStudent,
  addStudent,
  updateStudent,
  deleteStudent,
};
