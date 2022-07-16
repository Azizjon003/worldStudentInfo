const getall = async (req, res, Model, options) => {
  let data;
  console.log(options);
  if (options) {
    data = await Model.find().populate(options);
  } else {
    data = await Model.find();
  }
  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

const getOne = async (req, res, Model, options) => {
  let data;
  const id = req.params.id;
  if (options) {
    data = await Model.findById(id).populate(options);
  } else {
    data = await Model.findById(id);
  }
  res.status(200).json({
    status: "success",
    data: data,
  });
};
const addData = async (req, res, Model) => {
  const data = await Model.create(req.body);
  res.status(201).json({
    status: "success",
    data: data,
  });
};
const updateData = async (req, res, Model) => {
  const id = req.params.id;
  const data = await Model.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({
    data: data,
    status: "success",
  });
};
const deleteData = async (req, res, Model) => {
  const id = req.params.id;
  const data = await Model.findByIdAndDelete(id);
  res.status(200).json({
    status: "success",
  });
};
module.exports = { getall, getOne, addData, updateData, deleteData };
