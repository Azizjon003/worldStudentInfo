const Group = require("../model/group");
const {
  getall,
  getOne,
  addData,
  updateData,
  deleteData,
} = require("./handlerController");
const getAllGroup = (req, res) => {
  getall(req, res, Group);
};
const getOneGroup = (req, res) => {
  getOne(req, res, Group);
};
const addGroup = (req, res) => {
  addData(req, res, Group);
};
const updateGroup = (req, res) => {
  updateData(req, res, Group);
};

const deleteGroup = (req, res) => {
  deleteData(req, res, Group);
};

module.exports = {
  getAllGroup,
  getOneGroup,
  addGroup,
  updateGroup,
  deleteGroup,
};
