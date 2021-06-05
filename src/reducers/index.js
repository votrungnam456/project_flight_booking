import { combineReducers } from "redux";
import flight from "./flight";
import sanbay from "./sanbay";
import chuyenbay from "./chuyenbay";
import booking from "./booking";
import user from "./user";

var myReducer =  combineReducers({
    flight,
    sanbay,
    chuyenbay,
    booking,
    user
});

export default myReducer;