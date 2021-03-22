import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BookSession extends Component {
     render() {
          let {match} = this.props
          console.log(match)
          return (
               <div>
                    {/* booking section start */}
                    <section className="small-section">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-8">
                                        <div className="review-section">
                                             <div className="review_box">
                                                  <div className="title-top">
                                                       <h5>flight details</h5>
                                                  </div>
                                                  <div className="flight_detail">
                                                       <div className="row">
                                                            <div className="col-md-3">
                                                                 <div className="logo-sec">
                                                                      <img src="../assets/images/flights/airlines/1.png" className="img-fluid blur-up lazyload" alt />
                                                                      <span className="title">Egyptair</span>
                                                                 </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                 <div className="airport-part">
                                                                      <div className="airport-name">
                                                                           <h6>DXB <span>17.00</span></h6>
                                                                           <p>sat, 12 oct 2019</p>
                                                                      </div>
                                                                      <div className="airport-progress">
                                                                           <i className="fas fa-plane-departure float-left" />
                                                                           <i className="fas fa-plane-arrival float-right" />
                                                                      </div>
                                                                      <div className="airport-name arrival">
                                                                           <h6>CDG <span>17.00</span></h6>
                                                                           <p>sat, 12 oct 2019</p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                 <div className="duration">
                                                                      <div>
                                                                           <h6>20h 45m</h6>
                                                                           <p>1 stop</p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="review_box">
                                                  <div className="title-top">
                                                       <h5>Information</h5>
                                                  </div>
                                                  <div className="flight_detail">
                                                       <div className="row">
                                                            <div className="col-md-12">
                                                                 <div className="boxes">
                                                                      <h6>Cancellation Charges</h6>
                                                                      <ul>
                                                                           <li>airline fee : <span>$2012</span></li>
                                                                           <li>This airline allows cancellation only before 2 hrs from
                          departure time.</li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="boxes">
                                                                      <h6>Reschedule Charges</h6>
                                                                      <ul>
                                                                           <li>airline fee : <span>$2012</span></li>
                                                                           <li>This airline allows reschedule only before 2 hrs from departure
                          time.</li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="boxes">
                                                                      <h6>baggage policy</h6>
                                                                      <ul>
                                                                           <li>Check-in Baggage : <span>15 kg</span></li>
                                                                           <li>Cabin Baggage: <span>7 kg</span></li>
                                                                      </ul>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="review_box">
                                                  <div className="title-top">
                                                       <h5>traveller details</h5>
                                                  </div>
                                                  <div className="flight_detail">
                                                       <div className="row form_flight">
                                                            <div className="col-md-12">
                                                                 <form>
                                                                      <h6>adult 1</h6>
                                                                      <div className="form-row">
                                                                           <div className="form-group col-md-2">
                                                                                <label htmlFor="inputState">title</label>
                                                                                <select id="inputState" className="form-control">
                                                                                     <option selected>Choose...</option>
                                                                                     <option>Mr.</option>
                                                                                     <option>Ms.</option>
                                                                                     <option>Mrs.</option>
                                                                                </select>
                                                                           </div>
                                                                           <div className="form-group col-md-5">
                                                                                <label htmlFor="first">first name</label>
                                                                                <input type="text" className="form-control" id="firstt" />
                                                                           </div>
                                                                           <div className="form-group col-md-5">
                                                                                <label htmlFor="last">last name</label>
                                                                                <input type="text" className="form-control" id="lastt" />
                                                                           </div>
                                                                      </div>
                                                                 </form>
                                                                 <form>
                                                                      <h6>adult 2</h6>
                                                                      <div className="form-row">
                                                                           <div className="form-group col-md-2">
                                                                                <label htmlFor="input">title</label>
                                                                                <select id="input" className="form-control">
                                                                                     <option selected>Choose...</option>
                                                                                     <option>Mr.</option>
                                                                                     <option>Ms.</option>
                                                                                     <option>Mrs.</option>
                                                                                </select>
                                                                           </div>
                                                                           <div className="form-group col-md-5">
                                                                                <label htmlFor="first">first name</label>
                                                                                <input type="text" className="form-control" id="first" />
                                                                           </div>
                                                                           <div className="form-group col-md-5">
                                                                                <label htmlFor="last">last name</label>
                                                                                <input type="text" className="form-control" id="last" />
                                                                           </div>
                                                                      </div>
                                                                 </form>
                                                                 <form>
                                                                      <h6>contact details</h6>
                                                                      <div className="form-row">
                                                                           <div className="form-group col-md-6">
                                                                                <label htmlFor="inputEmail4">Email</label>
                                                                                <input type="email" className="form-control" id="inputEmail4" />
                                                                           </div>
                                                                           <div className="form-group col-md-6">
                                                                                <label htmlFor="inputnumber">Phone no:</label>
                                                                                <input type="number" className="form-control" id="inputnumber" />
                                                                           </div>
                                                                      </div>
                                                                 </form>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="review_box">
                                                  <div className="title-top">
                                                       <h5>Travel Insurance</h5>
                                                  </div>
                                                  <div className="flight_detail">
                                                       <div className="row">
                                                            <div className="col-md-12">
                                                                 <div className="boxes">
                                                                      <h6>secure your travel with travel insurance for $25/person</h6>
                                                                      <div className="form-check">
                                                                           <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                                           <label className="form-check-label" htmlFor="exampleRadios1">
                                                                                yes, i want to secure my travel with insurance
                        </label>
                                                                      </div>
                                                                      <div className="form-check">
                                                                           <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                                                                           <label className="form-check-label" htmlFor="exampleRadios2">
                                                                                no, i do not want to secure my travel with insurance
                        </label>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 res-margin">
                                        <div className="sticky-cls-top">
                                             <div className="review-section">
                                                  <div className="review_box">
                                                       <div className="title-top">
                                                            <h5>booking summery</h5>
                                                       </div>
                                                       <div className="flight_detail">
                                                            <div className="summery_box">
                                                                 <table className="table table-borderless">
                                                                      <tbody>
                                                                           <tr>
                                                                                <td>adults (3 X $2501)</td>
                                                                                <td>$250</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>total taxes</td>
                                                                                <td>$25</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>Insurance</td>
                                                                                <td>$15</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>Convenience fee</td>
                                                                                <td>$18</td>
                                                                           </tr>
                                                                      </tbody>
                                                                 </table>
                                                                 <div className="grand_total">
                                                                      <h5>grand total: <span>$2500</span></h5>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="review_box">
                                                       <div className="flight_detail">
                                                            <div className="promo-section">
                                                                 <div className="form-group mb-0">
                                                                      <label>have a coupon code?</label>
                                                                      <div className="input-group">
                                                                           <input type="text" className="form-control" placeholder="Promo Code" />
                                                                           <div className="input-group-prepend">
                                                                                <span className="input-group-text btn">apply</span>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div className="promos">
                                                                      <form>
                                                                           <div className="form-check">
                                                                                <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option1" defaultChecked />
                                                                                <div>
                                                                                     <label className="form-check-label title" htmlFor="exampleRadios3">
                                                                                          RICA500
                            </label>
                                                                                     <label className="form-check-label" htmlFor="exampleRadios3">
                                                                                          Use RICA50, and get $50 off on first booking
                            </label>
                                                                                </div>
                                                                           </div>
                                                                           <div className="form-check">
                                                                                <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios4" defaultValue="option2" />
                                                                                <div>
                                                                                     <label className="form-check-label title" htmlFor="exampleRadios4">
                                                                                          FLY10
                            </label>
                                                                                     <label className="form-check-label" htmlFor="exampleRadios4">
                                                                                          Use FLY10, and get 10% off upto $50 on flight ticket
                                                                                          bookings.
                            </label>
                                                                                </div>
                                                                           </div>
                                                                           <div className="form-check">
                                                                                <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios5" defaultValue="option2" />
                                                                                <div>
                                                                                     <label className="form-check-label title" htmlFor="exampleRadios5">
                                                                                          FLIGHT80
                            </label>
                                                                                     <label className="form-check-label" htmlFor="exampleRadios5">
                                                                                          Upto 80% Off + Upto 40% Cashback on Flight booking &amp; more +
                                                                                          Extra 10% off via ICICI Cards (10th-13th Oct)
                            </label>
                                                                                </div>
                                                                           </div>
                                                                      </form>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="continue-btn">
                                   <Link type="submit" className="btn btn-solid" to={`${match.path}/bookingsession/bookingaddons`}>continue booking</Link>
                              </div>
                         </div>
                    </section>
                    {/* booking section end */}
                    {/* book now section start */}
                    {/* <div className="book-panel">
                         <h6 className="mb-0 text">grand total : <span>$2500</span></h6>
                         <button type="button" onclick="window.location.href='flight-booking-addons.html'" className="btn bottom-btn theme-color">continue</button>
                    </div> */}
                    {/* book now section end */}
               </div>

          )
     }
}
