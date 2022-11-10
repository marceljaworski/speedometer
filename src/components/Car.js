import React from "react";
// import ReactDOM from "react-dom";
import ReactSpeedometer from "react-d3-speedometer";
import { useReducer } from "react";
const initState = {
  started: false,
  speed: 0
}
export const ACTIONS = {
  TURN_ONOFF: "turn-onoff",
  ACELERATE: "acelerate",
  BRAKE: "brake"
}
function reducer (car, action) {
  switch (action.type) {
    case ACTIONS.TURN_ONOFF: 
    
      return { ...car, started: !car.started }

    
    case ACTIONS.ACELERATE: 
    
      return { ...car, speed: 5 }
    case ACTIONS.BRAKE: 
    
      return { ...car, speed: 0 }
    
    
  }
}
export default function Car() {
  const [car, dispatch] = useReducer(reducer, initState)
  console.log(car)
  return (
    <div className="car">
      <ReactSpeedometer
        value={car.speed}
        labelFontSize={"31px"}
        valueTextFontSize={"37px"}
        paddingHorizontal={29}
        paddingVertical={29}
        currentValueText={`Km/h ${car.speed}`}
      />
      <button onClick={() => dispatch({ type: ACTIONS.TURN_ONOFF})}>an/auschalten</button>
      <button onClick={() => dispatch({ type: ACTIONS.ACELERATE})}>gas geben</button>
      <button onClick={() => dispatch({ type: ACTIONS.BRAKE})}>bremsen</button>
    </div>

  );
}
