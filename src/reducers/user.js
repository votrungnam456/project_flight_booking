import * as types from "../constants/ActionStyle";


var initialState = [];

const myReducer = (State = initialState, action) => {
    switch(action.type){
      case types.REGISTER_USER:
        State = action.infoUser;
        return State;
      case types.LOGIN:
        State = action.infoUser;
        return State;
      case types.LOGOUT:
        State = [];
        return State;
      default: 
        return State;
    }
}

export default myReducer;
