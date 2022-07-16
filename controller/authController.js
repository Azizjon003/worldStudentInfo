const jwt = require("jsonwebtoken");
const User = require("../model/userModel/user");
const errorHandling = require("../utility/errorHandling");

const signup = errorHandling(async (req, res, next) => {
  const data = await User.create({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  console.log(token);
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: data,
    },
  });
});

module.exports = { signup };
