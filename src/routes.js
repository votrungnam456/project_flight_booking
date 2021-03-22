import Home from "./components/home/Home";
import Booking from './components/booking/Booking'
import Listing from './components/listing/Listing'
import BookingSession from './components/booking/BookSession'
import BookingSuccess from './components/booking/BookingSuccess'
import BookingAddOns from './components/booking/BookingAddOns'
import BookingFailed from './components/booking/BookingFailed'
import BookingPayment from './components/booking/BookingPayment'
import NotFound from './components/home/NotFound'
import ListingNotFound from './components/listing/ListingNotFound'
// import React, { Component } from 'react'


const routes = [
     {
          path: '/',
          exact: true,
          main: () => <Home></Home>
     },
     {
          path: '/booking',
          exact: true,
          main: ({match,location}) => <Booking location={location} match={match}></Booking>
     },
     {
          path: '/listing',
          exact: true,
          main: () => <Listing></Listing>
     },
     {
          path: '/listing/*',
          exact: false,
          main: () => <ListingNotFound></ListingNotFound>
     },
     {
          path: '/booking/bookingsession',
          exact: true,
          main: ({match}) => <BookingSession match={match}></BookingSession>
     },
     {
          path: '/booking/bookingsession/bookingaddons',
          exact: true,
          main: ({match}) => <BookingAddOns match={match}></BookingAddOns>
     },
     {
          path: '/booking/bookingsession/bookingaddons/bookingpayment',
          exact: true,
          main: ({match}) => <BookingPayment match={match}></BookingPayment>
     },
     {
          path: '/booking/bookingsession/bookingaddons/bookingpayment/bookingsuccess',
          exact: true,
          main: ({match}) => <BookingSuccess match={match}></BookingSuccess>
     },
     {
          path: '/booking/bookingfailed',
          exact: true,
          main: () => <BookingFailed></BookingFailed>
     },
//     {
//         path : '/products',
//         exact : false,
//         main: ({match,location}) => <Products match={match} location={location}></Products>
//     },
//     {
//         path : '/login',
//         exact : false,
//         main: ({location}) => <Login location={location}></Login>
//     },
     {
          path: '',
          exact: false,
          main: () => <NotFound></NotFound>
     }
]

export default routes