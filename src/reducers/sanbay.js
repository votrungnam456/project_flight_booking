import * as types from "../constants/ActionStyle";


var initialState = [];

const myReducer = (State = initialState, action) => {
    switch(action.type){
      case types.FETCH_SANBAY:
        State = action.sanBay;
        return [...State];
      default: 
        return [...State];
    }
}

export default myReducer;
