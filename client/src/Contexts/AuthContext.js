import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [hasToken, setToken] = useState(false);
  const [userId, setUserId] = useState("");

  const addToken = (data) => {
    localStorage.setItem("token", data);
    setToken(!hasToken);
  };

  const userIdModify = (data) => {
    setUserId({ ...userId, userId: data });
  };

  return (
    <AuthContext.Provider
      value={{
        hasToken,
        userId,
        addToken: addToken,
        userIdModify: userIdModify,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
