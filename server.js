const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT | 4000;
const api = require("./Routes/Router");
require("./controller/Connection");
const db = require("./controller/Connection");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use("/", api);

db.authenticate()
  .then(() => console.log("Database connected ..."))
  .catch((err) => console.log(`Error: ` + err));

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
