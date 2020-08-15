const { Sequelize, DataTypes } = require("sequelize");
const db = require("../controller/Connection");
const Users = db.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// console.log(User === sequelize.models.User);
Users.sync();
module.exports = Users;
