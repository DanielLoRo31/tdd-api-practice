import express from 'express';

import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import GreetBuilder from './GreetBuilder';

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

app.get("/", (req, res) => {
  res.send("Well done!");
});

export default app;
