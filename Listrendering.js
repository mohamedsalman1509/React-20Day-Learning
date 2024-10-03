import React from "react";
import App from "../App";
function CarList() {
  const cars = [
    { brand: "BMW", color: "Red" },
    { brand: "Audi", color: "Black" },
    { brand: "Ford", color: "White" },
  ]; // Array of car objects with brand and color

  return (
    <div>
      <h1>Car List:</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.brand} - Color: {car.color}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
