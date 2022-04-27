const express = require("express");

const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const GreetBuilder = require('./GreetBuilder')

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

app.use(morgan("dev"));

app.post("/greet/:name", (req, res) => {
  const { name } = req.params;
  const greetingBuilder = new GreetBuilder(name);
  const greeting = greetingBuilder.build();
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end();
  res.status(200).json({greeting})
});

module.exports = app;
