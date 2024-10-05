import { useState } from "react";


function FavoriteColor(){
    const[color, setColor] = useState('Blue')
    return(
        <>
        <h1>My favorite Color is {color} </h1>
        <button onClick={() => {setColor('Red')}}>Change color</button>
        </>
    )
}

export default FavoriteColor;