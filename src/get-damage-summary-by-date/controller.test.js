import { describe, expect, it } from "vitest";
import controller from "./controller";

describe("GetDamageSummaryByDateController", () => {
  it("should return average, maximum and minimum events daily in date range", async () => {
    const dateStart = "2014-01-07";
    const dateEnd = "2014-01-09";

    const alerts = await controller.execute(dateStart, dateEnd);

    alerts.forEach((alert) => {
      expect(alert).toHaveProperty("date");
      expect(alert).toHaveProperty("maxDamageEvent");
      expect(alert).toHaveProperty("minDamageEvent");
      expect(alert).toHaveProperty("avgDamage");
    });
  });

  it("should return an empty array if no record exists with the specified date range", async () => {
    const dateStart = "2050/08/10";
    const dateEnd = "2051/08/10";

    const alerts = await controller.execute(dateStart, dateEnd);

    expect(alerts).toStrictEqual([]);
  });
});
