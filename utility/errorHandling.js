const AppError = require("./appError");

function errorHandling(params) {
  const funct = (req, res, next) => {
    params(req, res, next).catch((err) => {
      new AppError(err.message, 404);
    });
  };
  return funct;
}

module.exports = errorHandling;
