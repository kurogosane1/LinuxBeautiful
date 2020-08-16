import React, { Component, createContext } from "react";

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  state = {
    hasToken: false,
  };

  toggleAuth = () => {
    this.setState({
      hasToken: !this.state.hasToken,
    });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
