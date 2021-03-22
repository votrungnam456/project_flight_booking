import React, { Component } from 'react'
import Breadcump from './Breadcump'
import SearchList from './SearchList'
import SessionList from './SessionList'

export default class Listing extends Component {
     render() {
          return (
               <div>
                    <Breadcump/>
                    <SearchList/>
                    <SessionList/>
               </div>
          )
     }
}
