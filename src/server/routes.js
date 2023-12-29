const express = require("express");
const getDamageSummaryByDate = require("../get-damage-summary-by-date/route");

const router = express.Router();

router.get(getDamageSummaryByDate.path, getDamageSummaryByDate.fn);

module.exports = router;
