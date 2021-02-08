const express = require('express');
const knex = require('knex');

// CONFIGURE KNEX TO ACCESS BD

// CONFIG EXPRESS 
const app = express();
const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log('Live on port: ' + port);
});
app.use(express.json());

// SERVE FRONTEND
app.use(express.static('front'));

// test via node server.js