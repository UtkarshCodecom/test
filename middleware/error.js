

module.exports = (err, req, res, next) => {
  (err.statusCode = err.statusCode || 500),
    (err.message = err.message || "internal server error");

  //mongo db error in products
  if (err.name === "CastError") {
    const message = "resource not found something is invalid";
    
  }

  //duplticate key errorHander
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    
  }

  //Wrong jwt eror
  if (err.name === "JsonWebTokenError") {
    const message = `Json web token is invalid, try again later`;
    
  }

  //jwt expire error
  if (err.name === "TokenExpiredErrpr") {
    const message = `Json web token is Expired, try again `;
   
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
