import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([
    {
      Processor: "",
      RAM: "",
      Storage: "",
      GPU: "",
      type: "",
    },
  ]);
  const [cartTotal, setTotal] = useState([
    {
      Processor: 0,
      RAM: 0,
      Storage: 0,
      GPU: 0,
      type: 0,
    },
  ]);

  const addCart = async (data) => {
    console.log(data);
    let newItem = {
      Processor: data.Processor,
      RAM: data.RAM,
      Storage: data.Storage,
      GPU: data.GPU,
      type: data.type,
    };
    await setCart((cart) => [...cart, newItem]);
  };

  const addTotal = async (data) => {
    console.log(data);
    let newTotal = {
      Processor: data.Processor,
      RAM: data.RAM,
      Storage: data.Storage,
      GPU: data.GPU,
    };
    await setTotal((total) => [...total, newTotal]);
  };
  return (
    <CartContext.Provider value={{ cart, addCart, cartTotal, addTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
