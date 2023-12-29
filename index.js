require("dotenv").config();
const initDatabase = require("./src/database/init-database");
const server = require("./src/server/server");

const port = process.env.PORT || 3333;

async function start() {
  try {
    await initDatabase();

    server.listen(port, () => console.info(`Running server on port ${port}`));
  } catch (err) {
    console.error("an error has occurred while initiating the server: ", err);
  }
}

start();
