const { Sequelize, DataTypes } = require("sequelize");
const db = require("../controller/Connection");

//create table here
const Products = db.define("Products", {
  Prod_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ProdName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Processor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  GPU: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  RAM: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Storage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
});

Products.sync();
module.exports = Products;
