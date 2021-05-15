import * as types from "../constants/ActionStyle";
import callApi from "../utils/callAPI";

export const actFetchSanBaysCallApi = () => {
    return dispatch =>  {
        return callApi('sanbay','GET',null).then(res => {
            dispatch(actFetchSanBays(res.data));
        })
    }
}

export const actFetchSanBays = (sanBay) => {
    return {
        type: types.FETCH_SANBAY,
        sanBay
    }
}

export const actSearchFlightsCallApi = (flight) => {
    return dispatch =>  {
        return callApi('search-chuyenbay','POST',flight).then(res => {
            dispatch(actSearchFlights(res.data));
        })
    }
}

export const actSearchFlights = (flight) => {
    return {
        type: types.SEARCH_FLIGHT,
        flight
    }
}

export const actFindOneChuyenBayCallApi = (id) => {
    return dispatch =>  {
        return callApi(`chuyenbay/${id}`,'GET', null).then(res => {
            dispatch(actFindOneChuyenBay(res.data));
        })
    }
}

export const actFindOneChuyenBay = (chuyenBay) => {
    return {
        type: types.FIND_ONE_CHUYENBAY,
        chuyenBay
    }
}