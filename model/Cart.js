const { Sequelize, DataTypes } = require("sequelize");
const db = require("../controller/Connection");

const Cart = db.defind("Cart", {
  Cart_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id",
    },
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

Cart.sync();
module.exports = Cart;
