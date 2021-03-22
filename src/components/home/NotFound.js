import React, { Component } from 'react'

export default class NotFound extends Component {
     render() {
          return (
               <section className=" section-b-space bg-inner success-section">
                    <div className="container">
                         <div className="row success-detail mt-0">
                              <div className="col">
                                   <img src="../assets/images/icon/failure-icon.png" className="img-fluid blur-up lazyload" alt />
                                   <h2>404 ! that's an error</h2>
                                   <p>we are sorry but the page you are looking for doesn't exist or has been removed. please check
          back later or search again.</p>
                                   <button type="submit" className="btn btn-solid color1">go to home page</button>
                              </div>
                         </div>
                    </div>
               </section>

          )
     }
}
