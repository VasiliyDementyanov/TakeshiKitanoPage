const express = require("express");
require("dotenv").config();
//const favicon = require('express-favicon');
const path = require("path");
const port = process.env.PORT || 8080;

const app = express();
//app.use(favicon(__dirname + '/dist/favicon.png'));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "dist")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(port);
