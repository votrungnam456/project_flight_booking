import React, { Component } from 'react'
import Banner from './Banner'
import Blog from './Blog'
import Offer from './Offer'
import Package from './Package'

export default class Content extends Component {
     render() {
          return (
               <div>
                    <Offer/>
                    <Banner/>
                    <Package/>
                    <Blog/>
               </div>
          )
     }
}
