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
                                                       <h5>tùy chọn thanh toán</h5>
                                                  </div>
                                                  <div className="flight_detail payment-gateway">
                                                       <div className="accordion" id="accordionExample">
                                                            <div className="card">
                                                                 <div className="card-header" id="h_one">
                                                                      <div className="btn btn-link" data-toggle="collapse" data-target="#one" aria-expanded="true" aria-controls="one">
                                                                           <label htmlFor="r_one">
                                                                                <input type="radio" className="radio_animated ml-0" defaultChecked id="r_one" name="occupation" defaultValue="Working" required />
                          thẻ ghi nợ
                        </label>
                                                                      </div>
                                                                 </div>
                                                                 <div id="one" className="collapse show" aria-labelledby="h_one" data-parent="#accordionExample">
                                                                      <div className="card-body">
                                                                           <form>
                                                                                <div className="form-group">
                                                                                     <label htmlFor="name">tên chủ sỡ hữu</label>
                                                                                     <input type="text" className="form-control" id="name" />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                     <label htmlFor="number">số thẻ</label>
                                                                                     <input type="text" className="form-control" id="number" />
                                                                                     <img src="../assets/images/creditcards.png" alt className="img-fluid blur-up lazyload" />
                                                                                </div>
                                                                                <div className="form-row">
                                                                                     <div className="form-group col-md-4">
                                                                                          <label htmlFor="month">tháng</label>
                                                                                          <select id="month" className="form-control">
                                                                                               <option selected>Tháng...</option>
                                                                                               <option>Tháng 01</option>
                                                                                               <option>Tháng 02</option>
                                                                                               <option>Tháng 03</option>
                                                                                               <option>Tháng 04</option>
                                                                                               <option>Tháng 05</option>
                                                                                               <option>Tháng 06</option>
                                                                                               <option>Tháng 07</option>
                                                                                               <option>Tháng 08</option>
                                                                                               <option>Tháng 09</option>
                                                                                               <option>Tháng 10</option>
                                                                                               <option>Tháng 11</option>
                                                                                               <option>Tháng 12</option>
                                                                                          </select>
                                                                                     </div>
                                                                                     <div className="form-group col-md-4">
                                                                                          <label htmlFor="year">năm</label>
                                                                                          <select id="year" className="form-control">
                                                                                               <option selected>Năm...</option>
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
                                                                                     <button type="submit" className="btn btn-solid color1">thanh toán</button>
                                                                                </div>
                                                                           </form>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="card">
                                                                 <div className="card-header" id="h_two">
                                                                      <div className="btn btn-link" data-toggle="collapse" data-target="#two" aria-expanded="true" aria-controls="two">
                                                                           <label htmlFor="r_two">
                                                                                <input type="radio" className="radio_animated ml-0" id="r_two" name="occupation" defaultValue="Working" required /> thẻ tín dụng
                        </label>
                                                                      </div>
                                                                 </div>
                                                                 <div id="two" className="collapse" aria-labelledby="h_two" data-parent="#accordionExample">
                                                                      <div className="card-body">
                                                                           <form>
                                                                                <div className="form-group">
                                                                                     <label htmlFor="c-name">tên chủ sở hữu</label>
                                                                                     <input type="text" className="form-control" id="c-name" />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                     <label htmlFor="c-number">số thẻ</label>
                                                                                     <input type="text" className="form-control" id="c-number" />
                                                                                     <img src="../assets/images/creditcards.png" alt className="img-fluid blur-up lazyload" />
                                                                                </div>
                                                                                <div className="form-row">
                                                                                     <div className="form-group col-md-4">
                                                                                          <label htmlFor="c-month">tháng</label>
                                                                                          <select id="c-month" className="form-control">
                                                                                               <option selected>Tháng...</option>
                                                                                               <option>Tháng 01</option>
                                                                                               <option>Tháng 02</option>
                                                                                               <option>Tháng 03</option>
                                                                                               <option>Tháng 04</option>
                                                                                               <option>Tháng 05</option>
                                                                                               <option>Tháng 06</option>
                                                                                               <option>Tháng 07</option>
                                                                                               <option>Tháng 08</option>
                                                                                               <option>Tháng 09</option>
                                                                                               <option>Tháng 10</option>
                                                                                               <option>Tháng 11</option>
                                                                                               <option>Tháng 12</option>
                                                                                          </select>
                                                                                     </div>
                                                                                     <div className="form-group col-md-4">
                                                                                          <label htmlFor="c-year">năm</label>
                                                                                          <select id="c-year" className="form-control">
                                                                                               <option selected>Năm...</option>
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
                                                                                     <button type="submit" className="btn btn-solid color1">thanh toán</button>
                                                                                </div>
                                                                           </form>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="card">
                                                                 <div className="card-header" id="h_three">
                                                                      <div className="btn btn-link" data-toggle="collapse" data-target="#three" aria-expanded="true" aria-controls="three">
                                                                           <label htmlFor="r_three">
                                                                                <input type="radio" className="radio_animated ml-0" id="r_three" name="occupation" defaultValue="Working" required /> ngân hàng trực tuyến
                        </label>
                                                                      </div>
                                                                 </div>
                                                                 <div id="three" className="collapse" aria-labelledby="h_three" data-parent="#accordionExample">
                                                                      <div className="card-body">
                                                                           <form className="wallet-section">
                                                                                <h6>chọn ngân hàng phổ biến</h6>
                                                                                <div className="form-row">
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="Radios1" defaultValue="option1" defaultChecked />
                                                                                          <label className="form-check-label" htmlFor="Radios1">
                                                                                                Ngân hàng Công nghiệp &amp; Thương mại
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="Radios2" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="Radios2">
                                                                                               Tập đoàn Ngân hàng Xây dựng
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="Radios3" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="Radios3">
                                                                                               Ngân hàng Nông nghiệp
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="Radios4" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="Radios4">
                                                                                               Ngân hàng HSCB
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="Radios5" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="Radios5">
                                                                                               Ngân hàng Hoa Kỳ
                              </label>
                                                                                     </div>
                                                                                     <div className="form-check col-md-6">
                                                                                          <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="Radios6" defaultValue="option2" />
                                                                                          <label className="form-check-label" htmlFor="Radios6">
                                                                                               Ngân hàng JPMorgan Chase &amp; Co.
                              </label>
                                                                                     </div>
                                                                                </div>
                                                                                <div className="form-group mt-3">
                                                                                     <label htmlFor="net-b">chọn ngân hàng</label>
                                                                                     <select id="net-b" className="form-control">
                                                                                          <option selected>Ngân hàng...</option>
                                                                                          <option>...</option>
                                                                                     </select>
                                                                                </div>
                                                                                <div className="payment-btn">
                                                                                     <button type="submit" className="btn btn-solid color1">thanh toán</button>
                                                                                </div>
                                                                           </form>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="card">
                                                                 <div className="card-header" id="h_four">
                                                                      <div className="btn btn-link" data-toggle="collapse" data-target="#four" aria-expanded="true" aria-controls="four">
                                                                           <label htmlFor="r_four">
                                                                                <input type="radio" className="radio_animated ml-0" id="r_four" name="occupation" defaultValue="Working" required /> Ví của tôi
                        </label>
                                                                      </div>
                                                                 </div>
                                                                 <div id="four" className="collapse" aria-labelledby="h_four" data-parent="#accordionExample">
                                                                      <div className="card-body">
                                                                           <form className="wallet-section">
                                                                                <h6>chọn ví của bạn</h6>
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
                                                                                     <button type="submit" className="btn btn-solid color1">thanh toán</button>
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
                                                            <h5>tóm tắt</h5>
                                                       </div>
                                                       <div className="flight_detail">
                                                            <div className="summery_box">
                                                                 <div className="top-detail">
                                                                 </div>
                                                                 <table className="table table-borderless">
                                                                      <tbody>
                                                                           <tr>
                                                                                <td>giá vé</td>
                                                                                <td>$2500</td>
                                                                           </tr>
                                                                           <tr className="title">
                                                                                <td>hành lý phát sinh</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>vượt 15kg</td>
                                                                                <td>+ $25</td>
                                                                           </tr>
                                                                           <tr className="title">
                                                                                <td>khẩu phần ăn</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>khẩu phần rau X (1)</td>
                                                                                <td>+ $18</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>khẩu phần không rau X (1)</td>
                                                                                <td>+ $18</td>
                                                                           </tr>
                                                                           <tr className="title">
                                                                                <td>ghế ngồi</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>ghế(10D)</td>
                                                                                <td>+ $5</td>
                                                                           </tr>
                                                                      </tbody>
                                                                 </table>
                                                                 <div className="grand_total">
                                                                      <h5>thành tiền: <span>$2750</span></h5>
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
                         <h6 className="mb-0 text">thành tiền : <span>$2750</span></h6>
                         <button type="button" className="btn bottom-btn theme-color">thanh toán</button>
                    </div>
                    {/* book now section end */}
               </div>

          )
     }
}
