const globalErrorHanlder = (err, req, res, next) => {
  err.message = err.message || "internal Server Error";
  err.status = err.status || "Error";
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = globalErrorHanlder;
