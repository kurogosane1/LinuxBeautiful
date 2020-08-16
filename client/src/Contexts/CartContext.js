import React, { Component, createContext } from "react";

export const CartContext = createContext();

export default class CartContextProvider extends Component {
  state = {
    User_id: "",
    isLoggedIn: false,
    Cart: {},
  };

  render() {
    return (
      <CartContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
