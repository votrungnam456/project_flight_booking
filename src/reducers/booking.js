import * as types from "../constants/ActionStyle";


var initialState = [];

const myReducer = (State = initialState, action) => {
    switch(action.type){
      case types.BOOKING_CHUYENBAY:
        State = action.info_booking;
        return State;
      default: 
        return State;
    }
}

export default myReducer;
