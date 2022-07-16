const Region = require("../model/region");
const {
  getall,
  getOne,
  addData,
  updateData,
  deleteData,
} = require("./handlerController");
const getAllRegion = (req, res) => {
  getall(req, res, Region);
};
const getOneRegion = (req, res) => {
  getOne(req, res, Region);
};
const addRegion = (req, res) => {
  addData(req, res, Region);
};
const updateRegion = (req, res) => {
  updateData(req, res, Region);
};

const deleteRegion = (req, res) => {
  deleteData(req, res, Region);
};

module.exports = {
  getAllRegion,
  getOneRegion,
  addRegion,
  updateRegion,
  deleteRegion,
};
