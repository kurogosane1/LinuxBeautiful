const Users = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

module.exports.signup_get = (req, res) => {
  res.send("this is get from Signup Side");
};

module.exports.signup_post = async (req, res) => {
  console.log(req.body.tel);
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  Users.create({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    country: req.body.country,
    date: req.body.date,
    tel: req.body.tel,
    email: req.body.email,
    password: hashPassword,
  })
    .then((submit) => res.send(submit))
    .catch((err) => console.log(err));
};

module.exports.login_get = (req, res) => {
  res.send("this is get from Login Side");
};

module.exports.login_post = async (req, res) => {
  const user = await Users.findOne({ where: { email: req.body.email } });

  if (user === null) {
    res.sendStatus(400).send("email not found");
  } else {
    // Check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
      return res.status(400).send("Email is not found");
    } else {
      //Create ad assign a token
      const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
      res.header("auth-token", token).send(token);
    }
  }
};
