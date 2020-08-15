const Sequelize = require("sequelize");

const sequelize = new Sequelize("main3", "root", "Mein@wesome1", {
  host: "127.0.0.1",
  dialect: "mysql",
});

sequelize.sync({ force: true });
module.exports = sequelize;
