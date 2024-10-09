import { useState } from "react";

function Bike(){
    const [bike, setBike] = useState(
        {color:"Red",
         brand:"Yamaha",
         model: "R15 v3",
         year: "2023"

         })

        //  upadting object in state
// function updateColor(){
//     setBike(previousState => {
//         return{...previousState, color: "Blue"}
//     })

// }

         return<>
         <h1>My Bike</h1>
         <p>Brand: {bike.brand}</p>
         <p>Model: {bike.model} </p>
         <p>Year: {bike.year} </p>
         <p>Color: {bike.color} </p>

         {/* <button onClick={updateColor}>clike me</button> */}
         </>


}

export default Bike;
