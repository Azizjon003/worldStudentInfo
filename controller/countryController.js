const Country = require("../model/country");
const {
  getall,
  getOne,
  addData,
  updateData,
  deleteData,
} = require("./handlerController");

const getAllCountry = (req, res) => {
  getall(req, res, Country);
};
const getOneCountry = (req, res) => {
  getOne(req, res, Country);
};
const addCountry = (req, res) => {
  addData(req, res, Country);
};
const updateCountry = (req, res) => {
  updateData(req, res, Country);
};

const deleteCountry = (req, res) => {
  deleteData(req, res, Country);
};

module.exports = {
  getAllCountry,
  getOneCountry,
  addCountry,
  updateCountry,
  deleteCountry,
};
