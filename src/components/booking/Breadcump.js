import React, { Component } from 'react'

export default class Breadcump extends Component {
     render() {
          return (
               <section className="breadcrumb-section small-sec flight-sec pt-0">
                    <img src="../assets/images/flights/flight-breadcrumb2.jpg" className="bg-img img-fluid blur-up lazyload" alt />
                    <div className="content-bottom">
                         <div className="container">
                              <div className="row">
                                   <div className="col">
                                        <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                             <ol className="breadcrumb">
                                                  <li className="breadcrumb-item"><a href="flight-layout.html">Trang chủ</a></li>
                                                  <li className="breadcrumb-item"><a href="flight-right-sidebar.html">Chuyến bay</a></li>
                                                  <li className="breadcrumb-item active">Xem trước</li>
                                             </ol>
                                        </nav>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

          )
     }
}
