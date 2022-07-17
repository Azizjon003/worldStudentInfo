const jwt = require("jsonwebtoken");
const User = require("../model/userModel/user");
const AppError = require("../utility/appError");
const errorHandling = require("../utility/errorHandling");
const tokenVerify = (id) => {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};
const signup = errorHandling(async (req, res, next) => {
  const data = await User.create({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  const token = tokenVerify(data._id);
  console.log(token);
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: data,
    },
  });
});

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Parol yoki Email kirilmagan", 401));
  }

  const UserData = await User.findOne({ email }).select("+password");
  if (
    !UserData ||
    !(await UserData.correctPassword(password, UserData.password))
  ) {
    return next(
      new AppError(
        "Email  yoki Parol xato kiritildi iltimos qayta kiriting",
        401
      )
    );
  }
  const token = tokenVerify(UserData._id);
  console.log(UserData);
  res.status(200).json({
    status: "succes",
    token,
  });
};

module.exports = { signup, login };
