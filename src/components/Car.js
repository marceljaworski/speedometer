import React from "react";
import useReducer from "react";
export const ACTIONS = {
  TURN_ONOFF: "turn-onoff",
  ACELERATE: "acelerete",
  BRAKE: "brake"
}
function reducer (auto, action) {
  switch (action.type) {
    case TURN_ONOFF  : 
    if(auto.id === action.payload.id) {
      return { ...auto, complete: !auto.complete }
    }
    return auto
  }
}
export default function Car() {
  return <div className="car">Make your instrument cluster here</div>;
}
