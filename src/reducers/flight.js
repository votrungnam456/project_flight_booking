import * as types from "../constants/ActionStyle";


var initialState = [];

const myReducer = (State = initialState, action) => {
    switch(action.type){
      case types.SEARCH_FLIGHT:
        State = action.flight;
        return [...State];
      default: 
        return [...State];
    }
}

export default myReducer;


