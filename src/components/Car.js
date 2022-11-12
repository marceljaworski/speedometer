import React from "react";
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
      if (car.speed == 0)
        return { ...car, started: !car.started }
      else return car
    case ACTIONS.ACELERATE:
      if (car.started && car.speed < 1000) 
        return { ...car, speed: car.speed + 100 }
      else return car

    case ACTIONS.BRAKE: 
      if (car.speed > 0)
        return { ...car, speed: car.speed - 100 }
      else return car
    
  }
}
export default function Car() {
  const [car, dispatch] = useReducer(reducer, initState)
  console.log(car)
  return (
    <div className="car">
      {car.started? <ReactSpeedometer
        value={car.speed}
        labelFontSize={"31px"}
        valueTextFontSize={"37px"}
        paddingHorizontal={29}
        paddingVertical={29}
        currentValueText={`Km/h ${car.speed}`}
      /> : <h3>ausgechalted</h3>}
      <div className="toggles">
        <button className={car.started? "red" : "green"} onClick={() => dispatch({ type: ACTIONS.TURN_ONOFF})}>{car.started? "OFF" : "ON"}</button>
        <button className={car.started? "green" : "red" } onClick={() => dispatch({ type: ACTIONS.ACELERATE })}>gas geben</button>
        <button className={car.started? "green" : "red" } onClick={() => dispatch({ type: ACTIONS.BRAKE })}>bremsen</button>
      </div>
    </div>

  );
}
