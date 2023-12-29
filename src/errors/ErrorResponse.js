class ErrorResponse extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.name = "ErrorResponse";
  }
}

module.exports = ErrorResponse;
