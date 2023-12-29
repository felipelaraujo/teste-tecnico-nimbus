const controller = require("./controller");
const isValidDate = require("../utils/validate-date");
const ErrorResponse = require("../errors/ErrorResponse");
const errorHandler = require("../errors/error-handler");

module.exports = {
  async execute(req, res) {
    try {
      const { dateStart, dateEnd } = req.query;

      if (!isValidDate(dateStart) || !isValidDate(dateEnd)) {
        throw new ErrorResponse(
          "invalid parameter",
          "dateStart/dateEnd must be specified and have the format YYYY-MM-DD"
        );
      }

      if (dateEnd < dateStart) {
        throw new ErrorResponse(
          "invalid parameter",
          "dateEnd must be greater than or equal to dateStart"
        );
      }

      const alerts = await controller.execute(dateStart, dateEnd);

      res.send({
        data: alerts,
      });
    } catch (err) {
      const { code, error, message } = errorHandler(err);

      res.status(code).send({
        error,
        message,
      });
    }
  },
};
