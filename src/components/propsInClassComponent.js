import React, { Component } from "react";
import App from "../App";


class UserGreeting extends Component {
  render() {
    return (
      <div>
        <h1>Welcome, {this.props.name}!</h1>
        <p>Your age is: {this.props.age}</p>
      </div>
    );
  }
}

export default UserGreeting;
