import { combineReducers } from "redux";
import flight from "./flight";
import sanbay from "./sanbay";
import chuyenbay from "./chuyenbay";

var myReducer =  combineReducers({
    flight,
    sanbay,
    chuyenbay
});

export default myReducer;