import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Cart(props) {
  const { hasToken, userId, addToken, userIdModify } = useContext(AuthContext);
  // useEffect(() => {
  //   console.log(hasToken);
  //   console.log(props);
  // });

  const dothis = () => {
    userIdModify("this is saad");
  }
  return (
    <div>
      <h2>This is the cart section</h2>
      <h2>{hasToken}</h2>
      {/* <h2>{userId}</h2> */}
      <button onClick={dothis}>Click to add User</button>
      {/* <button onClick={addToken}></button> */}
    </div>
  );
}
