const populateDatabase = require("./populate-database");
const db = require("./database");

async function initDatabase() {
  await db.sync({ force: true });
  populateDatabase();
}

module.exports = initDatabase;
