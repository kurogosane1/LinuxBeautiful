import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [isLoggin, setLoggedIn] = useState(false);
  const [cart, setCart] = useState({
    Processor: "",
    RAM: "",
    Storage: "",
    GPU: "",
  });

  const addCart = (data) => {
    setCart({ ...cart, [data.name]: data.value });
  };
  return (
    <CartContext.Provider value={{ cart, isLoggin, addCart: addCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
