import * as types from "../constants/ActionStyle";


var initialState = [];

const myReducer = (State = initialState, action) => {
    switch(action.type){
      case types.FIND_ONE_CHUYENBAY:
        State = action.chuyenBay;
        return State;
      default: 
        return [...State];
    }
}

export default myReducer;
