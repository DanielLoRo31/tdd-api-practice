const express = require("express");

const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const GreetBuilder = require("./GreetBuilder");

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

// app.use(morgan("dev"));

app.get("/greet/:name", (req, res) => {
  const { name } = req.params;

  try {
    const greetingBuilder = new GreetBuilder(name);
    const greeting = greetingBuilder.build();
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.end();
    res.status(200).json({ greeting });
  } catch (error) {
    if (error.message === "NameInvalidException") {
      res.status(400).json({ message: `Name ${name} is invalid` });
    } else {
      res.status(500).end();
    }
  }
});

module.exports = app;
