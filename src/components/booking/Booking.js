import React, { Component } from 'react'
import BookSession from './BookSession'
import Breadcump from './Breadcump'

export default class Booking extends Component {
     render() {
          return (
               <div>
                    <Breadcump/>
                    <BookSession match ={this.props.match} history={this.props.history}/>
               </div>
          )
     }
}
