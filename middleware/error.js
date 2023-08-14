const ErrorHander = require("../utils/errorHander");

module.exports = (err, req, res, next) => {
  (err.statusCode = err.statusCode || 500),
    (err.message = err.message || "internal server error");

  //mongo db error in products
  if (err.name === "CastError") {
    const message = "resource not found something is invalid";
    err = new ErrorHander(message, 400);
  }

  //duplticate key errorHander
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHander(message, 400);
  }

  //Wrong jwt eror
  if (err.name === "JsonWebTokenError") {
    const message = `Json web token is invalid, try again later`;
    err = new ErrorHander(message, 400);
  }

  //jwt expire error
  if (err.name === "TokenExpiredErrpr") {
    const message = `Json web token is Expired, try again `;
    err = new ErrorHander(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
