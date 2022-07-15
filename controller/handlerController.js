const getall = async (req, res, Model, options) => {
  const data = await Model.find().populate();
  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

const getOne = async (req, res, Model) => {
  const id = req.params.id;
  const data = await Model.findById(id);

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
