const Region = require("../model/region");
const {
  getall,
  getOne,
  addData,
  updateData,
  deleteData,
} = require("./handlerController");
const getAllRegion = (req, res) => {
  getall(req, res, Region, {
    path: "countryId",
    select: "name -_id",
  });
};
const getOneRegion = (req, res) => {
  getOne(req, res, Region),
    {
      path: "countryId",
      select: "name -_id",
    };
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
