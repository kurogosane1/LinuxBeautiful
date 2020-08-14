const express = require("express");
const router = express.Router();
const auth = require("../controller/authcontroller");

router.get("/", (req, res) => {
  res.send("Hello World ");
});

router.get("/Signup", auth.signup_get);

module.exports = router;
