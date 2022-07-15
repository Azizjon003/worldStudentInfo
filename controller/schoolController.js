const School = require("../model/school");
const {
  getall,
  getOne,
  addData,
  updateData,
  deleteData,
} = require("./handlerController");
const getAllSchool = (req, res) => {
  getall(req, res, School);
};
const getOneSchool = (req, res) => {
  getOne(req, res, School);
};
const addSchool = (req, res) => {
  addData(req, res, School);
};
const updateSchool = (req, res) => {
  updateData(req, res, School);
};

const deleteSchool = (req, res) => {
  deleteData(req, res, School);
};

module.exports = {
  getAllSchool,
  getOneSchool,
  addSchool,
  updateSchool,
  deleteSchool,
};
