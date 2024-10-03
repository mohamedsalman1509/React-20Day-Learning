import React, { Component } from "react";
import App from "../App";
class ConditionalGreeting extends Component {
  render() {
    const { isLoggedIn, name } = this.props; // Destructure props

    return (
      <div>
        {isLoggedIn ? (
          <h1>Welcome back, {name}!</h1> // Render if logged in
        ) : (
          <h1>Please log in.</h1> // Render if not logged in
        )}
       
         
        {/* {ConditionalGreeting.isLoggedIn !== undefined && ConditionalGreeting !== undefined ? <App ConditionalGreeting={ConditionalGreeting}/>: null } */}
        {/* Ternart Operator(Condition?true:false) Using this  */}

      </div>
    );
  }
}

export default ConditionalGreeting;
