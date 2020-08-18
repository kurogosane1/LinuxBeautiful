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
  return (
    <CartContext.Provider value={{ cart, addCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
