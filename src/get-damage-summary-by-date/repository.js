const { Op } = require("sequelize");
const Alert = require("../model/Alert");

module.exports = {
  async execute(dateStart, dateEnd) {
    return Alert.findAll({
      where: {
        date: {
          [Op.between]: [dateStart, dateEnd],
        },
      },
      attributes: {
        exclude: ["id"],
      },
      raw: true,
    });
  },
};
