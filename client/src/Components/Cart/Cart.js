import React, { useContext } from "react";
import AuthContextProvider from "../../Contexts/AuthContext";

export default function Cart() {
  const { hasToken, userId, addToken, userIdModify } = useContext(
    AuthContextProvider
  );
 
  return (
    <div>
      <h2>This is the cart section</h2>
      <h2>{hasToken}</h2>
      <h2>{userId}</h2>
      <button onClick={userIdModify("Saad")}>Click to add User</button>
      <button onClick={addToken}></button>
    </div>
  );
}
