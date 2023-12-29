const calculateAverage = require("../utils/calculate-average");
const repository = require("./repository");

module.exports = {
  async execute(dateStart, dateEnd) {
    const dbAlerts = await repository.execute(dateStart, dateEnd);

    return dbAlerts
      .reduce((result, alert) => {
        const dateAlreadySummarized = result.find(
          ({ date }) => date === alert.date
        );

        const {
          damages: oldDamages,
          maxDamageEvent: oldMaxDamageEvent,
          minDamageEvent: oldMinDamageEvent,
        } = { ...dateAlreadySummarized };

        const date = alert.date;
        const damages = (oldDamages || []).concat([alert.damage]);

        let maxDamageEvent = alert;
        if (oldMaxDamageEvent && oldMaxDamageEvent.damage > alert.damage) {
          maxDamageEvent = oldMaxDamageEvent;
        }

        let minDamageEvent = alert;
        if (oldMinDamageEvent && oldMinDamageEvent.damage < alert.damage) {
          minDamageEvent = oldMinDamageEvent;
        }

        if (dateAlreadySummarized) {
          dateAlreadySummarized.damages = damages;
          dateAlreadySummarized.maxDamageEvent = maxDamageEvent;
          dateAlreadySummarized.minDamageEvent = minDamageEvent;
        } else {
          result.push({
            date,
            damages,
            maxDamageEvent,
            minDamageEvent,
          });
        }

        return result;
      }, [])
      .sort((a, b) => b.date.localeCompare(a.date))
      .map((summary) => {
        summary.avgDamage = calculateAverage(summary.damages);

        delete summary.damages;
        return summary;
      });
  },
};
