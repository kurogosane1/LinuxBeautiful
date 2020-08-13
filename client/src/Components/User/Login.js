import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

export default function Login(props) {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loginAccess = (e) => {
    
  };

  return (
    <div>
      <label>Please sign in</label>
      <form onSubmit={loginAccess}>
        <div>
          <input
            type="email"
            name="Deepin-id"
            placeholder="Deepin Id"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="Deepin-password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <span>
            Your Deepin ID is the email address you use to sign in to the App
            Store
          </span>
        </div>
        <div>
          <input type="submit" value="Sign In" />
        </div>
      </form>
    </div>
  );
}
