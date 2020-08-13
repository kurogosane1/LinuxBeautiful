import React, { useState } from "react";

export default function Signup() {
  const [newuser, setNewuser] = useState({});

  const handleChange = (e) => {
    setNewuser({ ...newuser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newuser);
  };

  return (
    <div>
      <div className="signup-heading">
        <h2>Create Your Deepin ID</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="first-name"
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>COUNTRY / REGION</label>
          <input
            type="text"
            name="country"
            placeholder="United States"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <input
            type="date"
            name="date"
            placeholder="birthday"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            onChange={handleChange}
          />
          <span>This will be your new Deepin ID</span>
        </div>
        <div>
          <input
            type="password"
            name="Deepin-password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="Deepin-password"
            placeholder="Confirm password"
            onChange={handleChange}
          />
        </div>
        <br />
        {/* this will be implemented when phone numbers are used */}
        <div>
          <input
            type="tel"
            name="tel"
            placeholder="Phone number"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <span>
            Your Deep ID information is used to allow you to sign in securely
            and access your data. Deepin records certain usage data for
            security, support, and reporting purposes
          </span>
        </div>
        <div>
          <input type="submit" value="Sign-Up" />
        </div>
      </form>
    </div>
  );
}
