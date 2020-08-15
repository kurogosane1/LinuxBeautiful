const express = require("express");
const router = express.Router();
const auth = require("../controller/authcontroller");
const User = require("../model/User");
const Products = require("../model/Product");

router.get("/", (req, res) => {
  User.findAll()
    .then((user) => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

router.get("/Signup", auth.signup_get);

router.get("/Products", (req, res) => {
  Products.findAll()
    .then((user) => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
