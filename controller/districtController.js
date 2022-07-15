const District = require("../model/district");
const {
  getall,
  getOne,
  addData,
  updateData,
  deleteData,
} = require("./handlerController");
const getAllDistrict = (req, res) => {
  getall(req, res, District);
};
const getOneDistrict = (req, res) => {
  getOne(req, res, District);
};
const addDistrict = (req, res) => {
  addData(req, res, District);
};
const updateDistrict = (req, res) => {
  updateData(req, res, District);
};

const deleteDistrict = (req, res) => {
  deleteData(req, res, District);
};

module.exports = {
  getAllDistrict,
  getOneDistrict,
  addDistrict,
  updateDistrict,
  deleteDistrict,
};
