function Car(props) {
  // const { brand ,  color } = props
  const {carinfo} = props;
  const{brand, color} = carinfo
  const text = `Hi, Im a ${color} ${brand} Car`;
  return(

  <h2>{text}</h2>
  );
}

export default Car;
