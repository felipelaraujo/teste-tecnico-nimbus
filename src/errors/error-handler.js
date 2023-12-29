const ErrorResponse = require("./ErrorResponse");

function errorHandler(err) {
  if (err instanceof ErrorResponse) {
    return {
      code: 400,
      error: err.code,
      message: err.message,
    };
  }

  console.error(err);
  return {
    code: 500,
    error: "internal server error",
    message: "an internal server error has occurred",
  };
}

module.exports = errorHandler;
