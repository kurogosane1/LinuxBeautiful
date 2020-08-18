import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { CartContext } from "../../Contexts/CartContext";

export default function Cart(props) {
  const { hasToken, userId, addToken, userIdModify } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart.length);
  }, [cart]);

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
            <div className="total">
              <label>Total</label>
              <span>$3000</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
