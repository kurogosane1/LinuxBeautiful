const express = require("express");
const router = express.Router();
const auth = require("../controller/authcontroller");
const User = require("../model/User");
const Products = require("../model/Product");
const jwt = require("jsonwebtoken");


router.get("/", (req, res) => {
  User.findAll()
    .then((user) => {
      // console.log(user);
      res.json(user);
    })
    .catch((err) => console.log(err));
});

router.post("/Login",auth.login_post);

router.get("/Signup", auth.signup_get);

router.post("/Signup", auth.signup_post);

router.get("/Products", (req, res) => {
  Products.findAll()
    .then((user) => {
      // console.log(user);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
