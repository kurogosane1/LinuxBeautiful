const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT | 4000;
const api = require("./Routes/Router");

const connection = require("./controller/control");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use("/", require("./Routes/Router"));
app.use("/", api);

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
