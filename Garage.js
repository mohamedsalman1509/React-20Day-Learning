import Car from "./Car";
import Apple from "./Apple";
function Garage() {
  const brand = 'Ford';
  const Carinfo = {brand:"ford", color:"Black"};
  const appleinfo = {type:"fuji" , color:"red"};
   return (
    <>
      <h1>Who lives inside my Garage?</h1>
      {/* <Car brand={brand} color={'black'} />  */}
      <Car carinfo={Carinfo} /> 

      <Apple appleinfo={appleinfo}/>
    </>
  );
}

export default Garage;
