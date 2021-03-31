const express = require("express");
require("dotenv").config();

// const knex = require("knex");
const path = require("path");
const data = require("./mock/data.json");

// CONFIGURE KNEX TO ACCESS BD

// CONFIG EXPRESS
const app = express();
const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log("Live on port: " + port);
});
app.use(express.json());


//manage JSON data and create API here
app.use(require("body-parser").json()); // parses JSON for server

app.get("/api/locations", (req, res) => {
  res.json(data);
})

// SERVE FRONTEND
app.use(express.static(path.resolve(__dirname, "dist")));
app.use(express.static("public"));

// THIS ALLOWS  ??
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
