import React, { useState } from "react";

export default function Verify() {
  const [deepid, setDeepid] = useState({});
  const handleChange = (e) => {
    setDeepid({ ...deepid, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(deepid);
  };
  return (
    <div>
      <div>
        <h1>Having trouble signing in?</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter your Apple ID to get started</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Deep ID"
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Continue" />
      </form>
    </div>
  );
}
