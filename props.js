import React from "react";
import App from "../App";

const name = 'Coders';
const color = 'Blue';
function Greeting(props) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Your favorite color is: {color}</p>
    </div>
  );
}

export default Greeting;
