module.exports.signup_get = (req, res) => {
  res.send("this is get from Signup Side");
};

module.exports.signup_post = (req, res) => {
  res.send("this is post from Signup Side");
};

module.exports.login_get = (req, res) => {
  res.send("this is get from Login Side");
};

module.exports.login_post = (req, res) => {
  res.send("this is post from Login Side");
};
