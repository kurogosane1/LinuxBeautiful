const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT | 3500;
const mysql = require("mysql");
const connection = require("./controller/control");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use("/", require("./Routes/Router"));

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`connected to mysql as ${connection.threadId}`);
  }
});

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
