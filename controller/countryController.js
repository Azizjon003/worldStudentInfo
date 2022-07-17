const Country = require("../model/country");
const district = require("../model/district");
const {
  getall,
  getOne,
  addData,
  updateData,
  deleteData,
} = require("./handlerController");

const getAllCountry = (req, res) => {
  getall(req, res, Country, {
    path: "regions",
    select: "name -_id -countryId",
  });
};
const getOneCountry = (req, res) => {
  getOne(req, res, Country, {
    path: "regions",
    select: "name -_id -countryId",
  });
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
const getOneCountryByRegion = async (req, res, next) => {
  const data = await district
    .find({ regionId: req.params.id })
    .select("-regionId -__v");

  res.status(200).json({
    data: data,
  });
};

module.exports = {
  getAllCountry,
  getOneCountry,
  addCountry,
  updateCountry,
  deleteCountry,
  getOneCountryByRegion,
};
