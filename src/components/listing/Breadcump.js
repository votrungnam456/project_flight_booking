import React, { Component } from 'react'

export default class Breadcump extends Component {
     render() {
          return (
               <section className="breadcrumb-section pt-0 bg-size">
                    <img src="../assets/images/flights/flight-breadcrumb2.jpg" className="bg-img img-fluid blur-up" alt />
                    <div className="breadcrumb-content dark-content">
                         <div>
                              <h2>about</h2>
                              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                   <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">elements</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Flight top Filter</li>
                                   </ol>
                              </nav>
                         </div>
                    </div>
               </section>

          )
     }
}
