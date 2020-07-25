const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT | 3500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use('/', require('./Routes/Router'));

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
