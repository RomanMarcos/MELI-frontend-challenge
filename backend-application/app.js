const express = require("express");
const cors = require('cors');

// Server creation
const app = express();

app.use(cors());
app.use(express.json()); // Parse all the objects cames from the requests to a JSON

module.exports = app;