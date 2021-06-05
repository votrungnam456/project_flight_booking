import Home from "./components/home/Home";
import Booking from './components/booking/Booking'
import Listing from './components/listing/Listing'
import BookingSession from './components/booking/BookSession'
import BookingSuccess from './components/booking/BookingSuccess'
import BookingFailed from './components/booking/BookingFailed'
import BookingPayment from './components/booking/BookingPayment'
import NotFound from './components/home/NotFound'
import ListingNotFound from './components/listing/ListingNotFound'
import Login from './components/login/login'
import Register from './components/login/register'
// import React, { Component } from 'react'


const routes = [
     {
          path: '/',
          exact: true,
          main: () => <Home></Home>
     },
     {
          path: '/booking/:id/:idVe',
          exact: true,
          main: ({match,location, history}) => <Booking history={history} location={location} match={match}></Booking>
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
          path: '/bookingpayment',
          exact: true,
          main: ({match}) => <BookingPayment match={match}></BookingPayment>
     },
     {
          path: '/bookingsuccess',
          exact: true,
          main: ({match}) => <BookingSuccess match={match}></BookingSuccess>
     },
     {
          path: '/bookingfailed',
          exact: true,
          main: () => <BookingFailed></BookingFailed>
     },
     {
          path: '/login',
          exact: true,
          main: ({history, match}) => <Login history={history} match={match}></Login>
     },
     {
          path: '/register',
          exact: true,
          main: ({history}) => <Register history={history}></Register>
     },
     {
          path: '',
          exact: false,
          main: () => <NotFound></NotFound>
     }
]

export default routes