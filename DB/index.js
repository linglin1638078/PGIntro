//create client DB that we will exporting out
const pg = require("pg");
const postgresUrl = "postgres://localhost:5432/nodeIntroDB";
const client = new pg.Client(postgresUrl);

client.connect();

module.exports = client;