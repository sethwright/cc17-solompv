const express = require("express");
// const knex = require("knex");
const path = require("path");

// CONFIGURE KNEX TO ACCESS BD

// CONFIG EXPRESS
const app = express();
const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log("Live on port: " + port);
});
app.use(express.json());

// SERVE FRONTEND
app.use(express.static(path.resolve(__dirname, "dist")));
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
