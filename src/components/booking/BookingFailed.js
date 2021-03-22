import React, { Component } from 'react'

export default class BookingFailed extends Component {
     render() {
          return (
               <section className="bg-inner section-b-space success-section">
                    <div className="container">
                         <div className="row success-detail mt-0">
                              <div className="col">
                                   <img src="../assets/images/icon/failure-icon.png" className="img-fluid blur-up lazyload" alt />
                                   <h2>oops ! we are unable to process your payment</h2>
                                   <p>looks like we encountered an error. please try again. if you continue to have issue, try another
          payment method.</p>
                                   <button type="submit" className="btn btn-solid color1">try again</button>
                              </div>
                         </div>
                    </div>
               </section>

          )
     }
}
