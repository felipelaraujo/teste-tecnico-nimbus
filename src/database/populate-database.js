const data = require("../../data/alerts.json");
const Alert = require("../model/Alert");

function populateDatabase() {
  data.forEach(async (alert) => {
    await Alert.create({
      date: alert.date,
      event: alert.event,
      damage: alert.damage,
    });
  });
}

module.exports = populateDatabase;
