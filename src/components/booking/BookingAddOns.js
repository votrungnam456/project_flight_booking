import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BookingAddOns extends Component {
     render() {
          let {match} = this.props
          return (
               <div>
               <section className="small-section">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-8">
                                   <div className="review-section">
                                        <div className="review_box">
                                             <div className="title-top">
                                                  <h5>add more for your trip</h5>
                                             </div>
                                             <div className="flight_detail">
                                                  <div className="row">
                                                       <div className="col-12">
                                                            <div className="accordion addons-according" id="accordionExample">
                                                                 <div className="card">
                                                                      <div className="card-header" id="headingTwo">
                                                                           <h2 className="mb-0">
                                                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                                     <img src="../assets/images/icon/seat.png" alt className="img-fluid blur-up lazyload" /> select seats
                          </button>
                                                                           </h2>
                                                                      </div>
                                                                      <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                           <div className="card-body seat-select">
                                                                                <div className="seat-details">
                                                                                     <ul>
                                                                                          <li>
                                                                                               <div className="box taken" />
                                                                                               <h6>taken</h6>
                                                                                          </li>
                                                                                          <li>
                                                                                               <div className="box selected" />
                                                                                               <h6>selected</h6>
                                                                                          </li>
                                                                                          <li>
                                                                                               <div className="box available" />
                                                                                               <h6>available</h6>
                                                                                          </li>
                                                                                     </ul>
                                                                                </div>
                                                                                <div className="plane">
                                                                                     <div className="cockpit">
                                                                                          <div>
                                                                                               <img src="../assets/images/flights/cockpit.png" alt className="img-fluid blur-up lazyload" />
                                                                                          </div>
                                                                                     </div>
                                                                                     <div className="exit exit--front fuselage">
                                                                                     </div>
                                                                                     <ol className="cabin fuselage">
                                                                                          <li className="row row--1">
                                                                                               <ol className="seats" type="A">
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="1A" />
                                                                                                         <label htmlFor="1A">1A</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="1B" />
                                                                                                         <label htmlFor="1B">1B</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="1C" />
                                                                                                         <label htmlFor="1C">1C</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" disabled id="1D" />
                                                                                                         <label htmlFor="1D">Occupied</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="1E" />
                                                                                                         <label htmlFor="1E">1E</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="1F" />
                                                                                                         <label htmlFor="1F">1F</label>
                                                                                                    </li>
                                                                                               </ol>
                                                                                          </li>
                                                                                          <li className="row row--2">
                                                                                               <ol className="seats" type="A">
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="2A" />
                                                                                                         <label htmlFor="2A">2A</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="2B" />
                                                                                                         <label htmlFor="2B">2B</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="2C" />
                                                                                                         <label htmlFor="2C">2C</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="2D" />
                                                                                                         <label htmlFor="2D">2D</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="2E" />
                                                                                                         <label htmlFor="2E">2E</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="2F" />
                                                                                                         <label htmlFor="2F">2F</label>
                                                                                                    </li>
                                                                                               </ol>
                                                                                          </li>
                                                                                          <li className="row row--3">
                                                                                               <ol className="seats" type="A">
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="3A" />
                                                                                                         <label htmlFor="3A">3A</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="3B" />
                                                                                                         <label htmlFor="3B">3B</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="3C" />
                                                                                                         <label htmlFor="3C">3C</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="3D" />
                                                                                                         <label htmlFor="3D">3D</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="3E" />
                                                                                                         <label htmlFor="3E">3E</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="3F" />
                                                                                                         <label htmlFor="3F">3F</label>
                                                                                                    </li>
                                                                                               </ol>
                                                                                          </li>
                                                                                          <li className="row row--4">
                                                                                               <ol className="seats" type="A">
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="4A" />
                                                                                                         <label htmlFor="4A">4A</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="4B" />
                                                                                                         <label htmlFor="4B">4B</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="4C" />
                                                                                                         <label htmlFor="4C">4C</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="4D" />
                                                                                                         <label htmlFor="4D">4D</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="4E" />
                                                                                                         <label htmlFor="4E">4E</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="4F" />
                                                                                                         <label htmlFor="4F">4F</label>
                                                                                                    </li>
                                                                                               </ol>
                                                                                          </li>
                                                                                          <li className="row row--5">
                                                                                               <ol className="seats" type="A">
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="5A" />
                                                                                                         <label htmlFor="5A">5A</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="5B" />
                                                                                                         <label htmlFor="5B">5B</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="5C" />
                                                                                                         <label htmlFor="5C">5C</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="5D" />
                                                                                                         <label htmlFor="5D">5D</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="5E" />
                                                                                                         <label htmlFor="5E">5E</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="5F" />
                                                                                                         <label htmlFor="5F">5F</label>
                                                                                                    </li>
                                                                                               </ol>
                                                                                          </li>
                                                                                          <li className="row row--6">
                                                                                               <ol className="seats" type="A">
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="6A" />
                                                                                                         <label htmlFor="6A">6A</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="6B" />
                                                                                                         <label htmlFor="6B">6B</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="6C" />
                                                                                                         <label htmlFor="6C">6C</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="6D" />
                                                                                                         <label htmlFor="6D">6D</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="6E" />
                                                                                                         <label htmlFor="6E">6E</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="6F" />
                                                                                                         <label htmlFor="6F">6F</label>
                                                                                                    </li>
                                                                                               </ol>
                                                                                          </li>
                                                                                          <li className="row row--7">
                                                                                               <ol className="seats" type="A">
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="7A" />
                                                                                                         <label htmlFor="7A">7A</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="7B" />
                                                                                                         <label htmlFor="7B">7B</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="7C" />
                                                                                                         <label htmlFor="7C">7C</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="7D" />
                                                                                                         <label htmlFor="7D">7D</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="7E" />
                                                                                                         <label htmlFor="7E">7E</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="7F" />
                                                                                                         <label htmlFor="7F">7F</label>
                                                                                                    </li>
                                                                                               </ol>
                                                                                          </li>
                                                                                          <li className="row row--8">
                                                                                               <ol className="seats" type="A">
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="8A" />
                                                                                                         <label htmlFor="8A">8A</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="8B" />
                                                                                                         <label htmlFor="8B">8B</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="8C" />
                                                                                                         <label htmlFor="8C">8C</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="8D" />
                                                                                                         <label htmlFor="8D">8D</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="8E" />
                                                                                                         <label htmlFor="8E">8E</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="8F" />
                                                                                                         <label htmlFor="8F">8F</label>
                                                                                                    </li>
                                                                                               </ol>
                                                                                          </li>
                                                                                          <li className="row row--9">
                                                                                               <ol className="seats" type="A">
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="9A" />
                                                                                                         <label htmlFor="9A">9A</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="9B" />
                                                                                                         <label htmlFor="9B">9B</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="9C" />
                                                                                                         <label htmlFor="9C">9C</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="9D" />
                                                                                                         <label htmlFor="9D">9D</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="9E" />
                                                                                                         <label htmlFor="9E">9E</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="9F" />
                                                                                                         <label htmlFor="9F">9F</label>
                                                                                                    </li>
                                                                                               </ol>
                                                                                          </li>
                                                                                          <li className="row row--10">
                                                                                               <ol className="seats" type="A">
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="10A" />
                                                                                                         <label htmlFor="10A">10A</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="10B" />
                                                                                                         <label htmlFor="10B">10B</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="10C" />
                                                                                                         <label htmlFor="10C">10C</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="10D" />
                                                                                                         <label htmlFor="10D">10D</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="10E" />
                                                                                                         <label htmlFor="10E">10E</label>
                                                                                                    </li>
                                                                                                    <li className="seat">
                                                                                                         <input type="checkbox" id="10F" />
                                                                                                         <label htmlFor="10F">10F</label>
                                                                                                    </li>
                                                                                               </ol>
                                                                                          </li>
                                                                                     </ol>
                                                                                     <div className="exit exit--back fuselage">
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div className="card">
                                                                      <div className="card-header" id="headingOne">
                                                                           <h2 className="mb-0">
                                                                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                                     <img src="../assets/images/icon/sandwich.png" alt className="img-fluid blur-up lazyload" /> Add inflight Meals
                          </button>
                                                                           </h2>
                                                                      </div>
                                                                      <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                                           <div className="card-body order-menu-section">
                                                                                <div className="order-section">
                                                                                     <div className="order-items">
                                                                                          <div className="items non-veg">
                                                                                               <h6>Barbaresca Pasta</h6>
                                                                                               <p>Spinach ravioli with combination sauce, broccoli,
                                  zucchini.</p>
                                                                                               <h5>$10.00</h5>
                                                                                               <div className="addtocart_btn">
                                                                                                    <button className="add-button add_cart" title="Add to cart" tabIndex={0}>
                                                                                                         add
                                  </button>
                                                                                                    <div className="qty-box cart_qty">
                                                                                                         <div className="input-group">
                                                                                                              <button type="button" className="btn qty-left-minus" data-type="minus" data-field tabIndex={0}>
                                                                                                                   <i className="fa fa-minus" aria-hidden="true" />
                                                                                                              </button>
                                                                                                              <input type="text" name="quantity" className="form-control input-number qty-input" defaultValue={1} tabIndex={0} />
                                                                                                              <button type="button" className="btn qty-right-plus" data-type="plus" data-field tabIndex={0}>
                                                                                                                   <i className="fa fa-plus" aria-hidden="true" />
                                                                                                              </button>
                                                                                                         </div>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="items non-veg">
                                                                                               <h6>Sprouts Salad</h6>
                                                                                               <p>Tomato, cucumber, peppers, olives, onion, feta,
                                  iceberg lettuce.</p>
                                                                                               <h5>$10.00</h5>
                                                                                               <div className="addtocart_btn">
                                                                                                    <button className="add-button add_cart" title="Add to cart" tabIndex={0}>
                                                                                                         add
                                  </button>
                                                                                                    <div className="qty-box cart_qty">
                                                                                                         <div className="input-group">
                                                                                                              <button type="button" className="btn qty-left-minus" data-type="minus" data-field tabIndex={0}>
                                                                                                                   <i className="fa fa-minus" aria-hidden="true" />
                                                                                                              </button>
                                                                                                              <input type="text" name="quantity" className="form-control input-number qty-input" defaultValue={1} tabIndex={0} />
                                                                                                              <button type="button" className="btn qty-right-plus" data-type="plus" data-field tabIndex={0}>
                                                                                                                   <i className="fa fa-plus" aria-hidden="true" />
                                                                                                              </button>
                                                                                                         </div>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="items veg">
                                                                                               <h6>Barbaresca Pasta</h6>
                                                                                               <p>Spinach ravioli with combination sauce, broccoli,
                                  zucchini.</p>
                                                                                               <h5>$10.00</h5>
                                                                                               <div className="addtocart_btn">
                                                                                                    <button className="add-button add_cart" title="Add to cart" tabIndex={0}>
                                                                                                         add
                                  </button>
                                                                                                    <div className="qty-box cart_qty">
                                                                                                         <div className="input-group">
                                                                                                              <button type="button" className="btn qty-left-minus" data-type="minus" data-field tabIndex={0}>
                                                                                                                   <i className="fa fa-minus" aria-hidden="true" />
                                                                                                              </button>
                                                                                                              <input type="text" name="quantity" className="form-control input-number qty-input" defaultValue={1} tabIndex={0} />
                                                                                                              <button type="button" className="btn qty-right-plus" data-type="plus" data-field tabIndex={0}>
                                                                                                                   <i className="fa fa-plus" aria-hidden="true" />
                                                                                                              </button>
                                                                                                         </div>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="items veg">
                                                                                               <h6>Sprouts Salad</h6>
                                                                                               <p>Tomato, cucumber, peppers, olives, onion, feta,
                                  iceberg lettuce.</p>
                                                                                               <h5>$10.00</h5>
                                                                                               <div className="addtocart_btn">
                                                                                                    <button className="add-button add_cart" title="Add to cart" tabIndex={0}>
                                                                                                         add
                                  </button>
                                                                                                    <div className="qty-box cart_qty">
                                                                                                         <div className="input-group">
                                                                                                              <button type="button" className="btn qty-left-minus" data-type="minus" data-field tabIndex={0}>
                                                                                                                   <i className="fa fa-minus" aria-hidden="true" />
                                                                                                              </button>
                                                                                                              <input type="text" name="quantity" className="form-control input-number qty-input" defaultValue={1} tabIndex={0} />
                                                                                                              <button type="button" className="btn qty-right-plus" data-type="plus" data-field tabIndex={0}>
                                                                                                                   <i className="fa fa-plus" aria-hidden="true" />
                                                                                                              </button>
                                                                                                         </div>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="items veg">
                                                                                               <h6>Barbaresca Pasta</h6>
                                                                                               <p>Spinach ravioli with combination sauce, broccoli,
                                  zucchini.</p>
                                                                                               <h5>$10.00</h5>
                                                                                               <div className="addtocart_btn">
                                                                                                    <button className="add-button add_cart" title="Add to cart" tabIndex={0}>
                                                                                                         add
                                  </button>
                                                                                                    <div className="qty-box cart_qty">
                                                                                                         <div className="input-group">
                                                                                                              <button type="button" className="btn qty-left-minus" data-type="minus" data-field tabIndex={0}>
                                                                                                                   <i className="fa fa-minus" aria-hidden="true" />
                                                                                                              </button>
                                                                                                              <input type="text" name="quantity" className="form-control input-number qty-input" defaultValue={1} tabIndex={0} />
                                                                                                              <button type="button" className="btn qty-right-plus" data-type="plus" data-field tabIndex={0}>
                                                                                                                   <i className="fa fa-plus" aria-hidden="true" />
                                                                                                              </button>
                                                                                                         </div>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="items veg">
                                                                                               <h6>Sprouts Salad</h6>
                                                                                               <p>Tomato, cucumber, peppers, olives, onion, feta,
                                  iceberg lettuce.</p>
                                                                                               <h5>$10.00</h5>
                                                                                               <div className="addtocart_btn">
                                                                                                    <button className="add-button add_cart" title="Add to cart" tabIndex={0}>
                                                                                                         add
                                  </button>
                                                                                                    <div className="qty-box cart_qty">
                                                                                                         <div className="input-group">
                                                                                                              <button type="button" className="btn qty-left-minus" data-type="minus" data-field tabIndex={0}>
                                                                                                                   <i className="fa fa-minus" aria-hidden="true" />
                                                                                                              </button>
                                                                                                              <input type="text" name="quantity" className="form-control input-number qty-input" defaultValue={1} tabIndex={0} />
                                                                                                              <button type="button" className="btn qty-right-plus" data-type="plus" data-field tabIndex={0}>
                                                                                                                   <i className="fa fa-plus" aria-hidden="true" />
                                                                                                              </button>
                                                                                                         </div>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div className="card">
                                                                      <div className="card-header" id="headingThree">
                                                                           <h2 className="mb-0">
                                                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                                     <img src="../assets/images/icon/suitcase.png" alt className="img-fluid blur-up lazyload" /> additional baggage
                          </button>
                                                                           </h2>
                                                                      </div>
                                                                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                                           <div className="card-body order-menu-section">
                                                                                <div className="order-section">
                                                                                     <div className="order-items">
                                                                                          <div className="items">
                                                                                               <h6>additional 5 KG</h6>
                                                                                               <h5>$10.00</h5>
                                                                                               <div className="addtocart_btn">
                                                                                                    <button className="add-button add_cart" title="Add to cart" tabIndex={0}>
                                                                                                         add
                                  </button>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="items">
                                                                                               <h6>additional 7 KG</h6>
                                                                                               <h5>$15.00</h5>
                                                                                               <div className="addtocart_btn">
                                                                                                    <button className="add-button add_cart" title="Add to cart" tabIndex={0}>
                                                                                                         add
                                  </button>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="items">
                                                                                               <h6>additional 10 KG</h6>
                                                                                               <h5>$20.00</h5>
                                                                                               <div className="addtocart_btn">
                                                                                                    <button className="add-button add_cart" title="Add to cart" tabIndex={0}>
                                                                                                         add
                                  </button>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="items">
                                                                                               <h6>additional 15 KG</h6>
                                                                                               <h5>$25.00</h5>
                                                                                               <div className="addtocart_btn">
                                                                                                    <button className="add-button add_cart" title="Add to cart" tabIndex={0}>
                                                                                                         add
                                  </button>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="items">
                                                                                               <h6>additional 20 KG</h6>
                                                                                               <h5>$30.00</h5>
                                                                                               <div className="addtocart_btn">
                                                                                                    <button className="add-button add_cart" title="Add to cart" tabIndex={0}>
                                                                                                         add
                                  </button>
                                                                                               </div>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
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
                                                       <h5>travel addons</h5>
                                                  </div>
                                                  <div className="flight_detail">
                                                       <div className="summery_box">
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
                                        <div className="single-section">
                                             <div className="single-sidebar p-0">
                                                  <div className="newsletter-sec">
                                                       <div>
                                                            <h4 className="title">always first</h4>
                                                            <p>Be the first to find out latest tours and exclusive offers and get 15% off
                    your first booking.</p>
                                                            <form>
                                                                 <input type="email" id="email1" className="form-control" placeholder="Enter your email" />
                                                                 <div className="button">
                                                                      <a href="#" className="btn btn-solid ">be the first</a>
                                                                 </div>
                                                            </form>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="continue-btn">
                              <Link type="submit" className="btn btn-solid" to={`${match.path}/bookingpayment`}>make payment</Link>
                         </div>
                    </div>
               </section>

                    <div className="book-panel">
                         <h6 className="mb-0 text">grand total : <span>$2750</span></h6>
                         <button type="button" onclick="window.location.href='flight-booking-payment.html'" className="btn bottom-btn theme-color">make payment</button>
                    </div>

               </div>
          )
     }
}
