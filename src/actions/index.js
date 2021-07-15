import * as types from "../constants/ActionStyle";
import callApi from "../utils/callAPI";

export const actFetchSanBaysCallApi = () => {
    return dispatch =>  {
        return callApi('sanbay','GET',null).then(res => {
            dispatch(actFetchSanBays(res.data));
        })
    }
}

export const actFetchChuyenBays = (chuyenBay) => {
    return {
        type: types.FETCH_CHUYENBAY,
        chuyenBay
    }
}

export const actFetchChuyenBaysCallApi = () => {
    return dispatch =>  {
        return callApi('chuyenbay','GET',null).then(res => {
            dispatch(actFetchChuyenBays(res.data));
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

export const actFindOneChuyenBayCallApi = (id, idVe) => {
    return dispatch =>  {
        return callApi(`chuyenbay/${id}/${idVe}`,'GET', null).then(res => {
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

export const actBookingTicketCallApi = (info_booking) => {
    return dispatch =>  {
        return callApi(`phieudatve`,'POST', info_booking).then(res => {
            dispatch(actBookingTicket(res.data));
        })
    }
}

export const actBookingTicket = (info_booking) => {
    return {
        type: types.BOOKING_CHUYENBAY,
        info_booking
    }
}

export const actRegisterCallApi = (infoUser) => {
    return dispatch =>  {
        return callApi(`khachhang`,'POST', infoUser).then(res => {
            dispatch(actRegister(res.data));
        })
    }
}

export const actRegister = (infoUser) => {
    return {
        type: types.REGISTER_USER,
        infoUser
    }
}

export const actLoginCallApi = (infoUser) => {
    return dispatch =>  {
        return callApi(`login`,'POST', infoUser).then(res => {
            dispatch(actLogin(res.data));
        })
    }
}

export const actLogin = (infoUser) => {
    return {
        type: types.LOGIN,
        infoUser
    }
}

export const actLogout = () => {
    return {
        type: types.LOGOUT
    }
}