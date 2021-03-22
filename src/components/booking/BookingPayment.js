import React, { Component } from 'react'

export default class BookingPayment extends Component {
     render() {
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
                                                       <h5>payment option</h5>
                                                  </div>
                                                  <div className="flight_detail payment-gateway">
                                                       <div className="accordion" id="accordionExample">
                                                            <div className="card">
                                                                 <div className="card-header" id="h_one">
                                                                      <div className="btn btn-link" data-toggle="collapse" data-target="#one" aria-expanded="true" aria-controls="one">
                                                                           <label htmlFor="r_one">
                                                                                <input type="radio" className="radio_animated ml-0" defaultChecked id="r_one" name="occupation" defaultValue="Working" required />
                          debit card
                        </label>
                                                                      </div>
                                                                 </div>
                                                                 <div id="one" className="collapse show" aria-labelledby="h_one" data-parent="#accordionExample">
                                                                      <div className="card-body">
                                                                           <form>
                                                                                <div className="form-group">
                                                                                     <label htmlFor="name">name on card</label>
                                                                                     <input type="text" className="form-control" id="name" />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                     <label htmlFor="number">card number</label>
                                                                                     <input type="text" className="form-control" id="number" />
                                                                                     <img src="../assets/images/creditcards.png" alt className="img-fluid blur-up lazyload" />
                                                                                </div>
                                                                                <div className="form-row">
                                                                                     <div className="form-group col-md-4">
                                                                                          <label htmlFor="month">month</label>
                                                                                          <select id="month" className="form-control">
                                                                                               <option selected>Month...</option>
                                                                                               <option>January</option>
                                                                                               <option>February</option>
                                                                                               <option>March</option>
                                                                                               <option>April</option>
                                                                                               <option>May</option>
                                                                                               <option>June</option>
                                                                                               <option>July</option>
                                                                                               <option>August</option>
                                                                                               <option>September</option>
                                                                                               <option>October</option>
                                                                                               <option>November</option>
                                                                                               <option>December</option>
                                                                                          </select>
                                                                                     </div>
                                                                                     <div className="form-group col-md-4">
                                                                                          <label htmlFor="year">year</label>
                                                                                          <select id="year" className="form-control">
                                                                                               <option selected>Year...</option>
                                                                                               <option>...</option>
                                                                                          </select>
                                                                                     </div>
                                                                                     <div className="form-group col-md-4">
                                                                                          <label htmlFor="cvv">cvv</label>
                                                                                          <input type="password" maxLength={4} className="form-control" id="cvv" />
                                                                                          <img src="../assets/images/cvv.png" className="img-fluid blur-up lazyload" alt />
                                                                                     </div>
                                                                                </div>
                                                                                <div className="payment-btn">
                                                                                     <button type="submit" className="btn btn-solid color1">make
                              payment</button>
                                                                                </div>
                                                                           </form>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="card">
                                                                 <div className="card-header" id="h_two">
                                                                      <div className="btn btn-link" data-toggle="collapse" data-target="#two" aria-expanded="true" aria-controls="two">
                                                                           <label htmlFor="r_two">
                                                                                <input type="radio" className="radio_animated ml-0" id="r_two" name="occupation" defaultValue="Working" required /> credit card
                        </label>
                                                                      </div>
                                                                 </div>
                                                                 <div id="two" className="collapse" aria-labelledby="h_two" data-parent="#accordionExample">
                                                                      <div className="card-body">
                                                                           <form>
                                                                                <div className="form-group">
                                                                                     <label htmlFor="c-name">name on card</label>
                                                                                     <input type="text" className="form-control" id="c-name" />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                     <label htmlFor="c-number">card number</label>
                                                                                     <input type="text" className="form-control" id="c-number" />
                                                                                     <img src="../assets/images/creditcards.png" alt className="img-fluid blur-up lazyload" />
                                                                                </div>
                                                                                <div className="form-row">
                                                                                     <div className="form-group col-md-4">
                                                                                          <label htmlFor="c-month">month</label>
                                                                                          <select id="c-month" className="form-control">
                                                                                               <option selected>Month...</option>
                                                                                               <option>January</option>
                                                                                               <option>February</option>
                                                                                               <option>March</option>
                                                                                               <option>April</option>
                                                                                               <option>May</option>
                                                                                               <option>June</option>
                                                                                               <option>July</option>
                                                                                               <option>August</option>
                                                                                               <option>September</option>
                                                                                               <option>October</option>
                                                                                               <option>November</option>
                                                                                               <option>December</option>
                                                                                          </select>
                                                                                     </div>
                                                                                     <div className="form-group col-md-4">
                                                                                          <label htmlFor="c-year">year</label>
                                                                                          <select id="c-year" className="form-control">
                                                                                               <option selected>Year...</option>
                                                                                               <option>...</option>
                                                                                          </select>
                                                                                     </div>
                                                                                     <div className="form-group col-md-4">
                                                                                          <label htmlFor="c-cvv">cvv</label>
                                                                                          <input type="password" className="form-control" maxLength={4} id="c-cvv" />
                                                                                          <img src="../assets/images/cvv.png" className="img-fluid blur-up lazyload" alt />
                                                                                     </div>
                                                                                </div>
                                                                                <div className="payment-btn">
                                                                                     <button type="submit" className="btn btn-solid color1">make
                              payment</button>
                                                                                </div>
                                                                           </form>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="card">
                                                                 <div className="card-header" id="h_three">
                                                                      <div className="btn btn-link" data-toggle="collapse" data-target="#three" aria-expanded="true" aria-controls="three">
                                                                           <label htmlFor="r_three">
                                                                                <input type="radio" className="radio_animated ml-0" id="r_three" name="occupation" defaultValue="Working" required /> net banking
                        </label>
                                                                      </div>
                                                                 </div>
                                                                 <div id="three" className="collapse" aria-labelledby="h_three" data-parent="#accordionExample">
                                                                      <div className="card-body">
                                                                           <form className="wallet-section">
                                                                                <h6>select popular banks</h6>
                                                                                <div className="form-row">
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="Radios1" defaultValue="option1" defaultChecked />
                                                                                          <label className="form-check-label" htmlFor="Radios1">
                                                                                               Industrial &amp; Commercial Bank
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="Radios2" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="Radios2">
                                                                                               Construction Bank Corp.
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="Radios3" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="Radios3">
                                                                                               Agricultural Bank
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="Radios4" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="Radios4">
                                                                                               HSBC Holdings
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="Radios5" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="Radios5">
                                                                                               Bank of America
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="Radios6" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="Radios6">
                                                                                               JPMorgan Chase &amp; Co.
                              </label>
                                                                                     </div>
                                                                                </div>
                                                                                <div className="form-group mt-3">
                                                                                     <label htmlFor="net-b">select bank</label>
                                                                                     <select id="net-b" className="form-control">
                                                                                          <option selected>Choose Bank...</option>
                                                                                          <option>...</option>
                                                                                     </select>
                                                                                </div>
                                                                                <div className="payment-btn">
                                                                                     <button type="submit" className="btn btn-solid color1">make
                              payment</button>
                                                                                </div>
                                                                           </form>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="card">
                                                                 <div className="card-header" id="h_four">
                                                                      <div className="btn btn-link" data-toggle="collapse" data-target="#four" aria-expanded="true" aria-controls="four">
                                                                           <label htmlFor="r_four">
                                                                                <input type="radio" className="radio_animated ml-0" id="r_four" name="occupation" defaultValue="Working" required /> my wallet
                        </label>
                                                                      </div>
                                                                 </div>
                                                                 <div id="four" className="collapse" aria-labelledby="h_four" data-parent="#accordionExample">
                                                                      <div className="card-body">
                                                                           <form className="wallet-section">
                                                                                <h6>select your wallet</h6>
                                                                                <div className="form-row">
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                                                          <label className="form-check-label" htmlFor="exampleRadios1">
                                                                                               Adyen
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="exampleRadios2">
                                                                                               Airtel Money
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="exampleRadios3">
                                                                                               AlliedWallet
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios4" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="exampleRadios4">
                                                                                               Apple Pay
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios5" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="exampleRadios5">
                                                                                               Brinks
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios6" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="exampleRadios6">
                                                                                               CardFree
                              </label>
                                                                                     </div>
                                                                                </div>
                                                                                <div className="payment-btn">
                                                                                     <button type="submit" className="btn btn-solid color1">make
                              payment</button>
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
                                   <div className="col-lg-4 res-margin">
                                        <div className="sticky-cls-top">
                                             <div className="review-section">
                                                  <div className="review_box">
                                                       <div className="title-top">
                                                            <h5>booking summery</h5>
                                                       </div>
                                                       <div className="flight_detail">
                                                            <div className="summery_box">
                                                                 <div className="top-detail">
                                                                 </div>
                                                                 <table className="table table-borderless">
                                                                      <tbody>
                                                                           <tr>
                                                                                <td>flight fare</td>
                                                                                <td>$2500</td>
                                                                           </tr>
                                                                           <tr className="title">
                                                                                <td>additional baggage</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>additional 15kg</td>
                                                                                <td>+ $25</td>
                                                                           </tr>
                                                                           <tr className="title">
                                                                                <td>inflight meals</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>veg meal X (1)</td>
                                                                                <td>+ $18</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>non-veg meal X (1)</td>
                                                                                <td>+ $18</td>
                                                                           </tr>
                                                                           <tr className="title">
                                                                                <td>seats</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>seat(10D)</td>
                                                                                <td>+ $5</td>
                                                                           </tr>
                                                                      </tbody>
                                                                 </table>
                                                                 <div className="grand_total">
                                                                      <h5>grand total: <span>$2750</span></h5>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* booking section end */}
                    {/* book now section start */}
                    <div className="book-panel">
                         <h6 className="mb-0 text">grand total : <span>$2750</span></h6>
                         <button type="button" className="btn bottom-btn theme-color">make payment</button>
                    </div>
                    {/* book now section end */}
               </div>

          )
     }
}
