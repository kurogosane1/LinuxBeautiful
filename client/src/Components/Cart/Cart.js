import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { CartContext } from "../../Contexts/CartContext";

export default function Cart(props) {
  const { hasToken, userId, addToken, userIdModify } = useContext(AuthContext);
  const { cart, cartTotal } = useContext(CartContext);
  const [tempTotal, setTempTotal] = useState();

  useEffect(() => {
    console.log(cart.length);
  }, [cart]);

  useEffect(() => {
    let test = cartTotal
      .map((item) => item.RAM + item.GPU + item.Processor + item.Storage)
      .reduce((a, b) => a + b);
    setTempTotal(test);
  }, [cartTotal]);

  return (
    <div className="container">
      <div className="cart col-1-cart">
        <h2>Cart</h2>
      </div>
      <div className="cart col-2-cart">
        <h3>Current Cart</h3>

        <br />
        {cart.length <= 1 ? (
          <h2>Cart is empty</h2>
        ) : (
          <>
            <ul>
              <li>
                <span>{cart[1].Processor}</span>
              </li>
              <li>
                <span>{cart[1].RAM}</span>
              </li>
              <li>
                <span>{cart[1].Storage}</span>
              </li>
              <li>
                <span>{cart[1].GPU}</span>
              </li>
            </ul>
            {tempTotal != null || tempTotal != 0 ? (
              <div className="total">
                <label>Total</label>
                <span>{tempTotal}</span>
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
}
