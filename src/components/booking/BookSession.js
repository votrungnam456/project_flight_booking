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
                                                       <h5>thông tin chuyến bay</h5>
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
                                                                           <p>T.Bảy, ngày 12 tháng 10, 2019</p>
                                                                      </div>
                                                                      <div className="airport-progress">
                                                                           <i className="fas fa-plane-departure float-left" />
                                                                           <i className="fas fa-plane-arrival float-right" />
                                                                      </div>
                                                                      <div className="airport-name arrival">
                                                                           <h6>CDG <span>17.00</span></h6>
                                                                           <p>T.Bảy, ngày 12 tháng 10, 2019</p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                 <div className="duration">
                                                                      <div>
                                                                           <h6>20 giờ 15 phút</h6>
                                                                           <p>1 chặn dừng</p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="review_box">
                                                  <div className="title-top">
                                                       <h5>Thông tin</h5>
                                                  </div>
                                                  <div className="flight_detail">
                                                       <div className="row">
                                                            <div className="col-md-12">
                                                                 <div className="boxes">
                                                                      <h6>Phí hủy vé</h6>
                                                                      <ul>
                                                                           <li>phí : <span>$2012</span></li>
                                                                           <li>Hãng bay này chỉ cho phép hủy vé 2 giờ trước lúc khởi hành.</li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="boxes">
                                                                      <h6>Phí dời lịch</h6>
                                                                      <ul>
                                                                           <li>phí : <span>$2012</span></li>
                                                                           <li>Hãng bay này chỉ cho phép dời lịch bay 2 giờ trước lúc khởi hành.</li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="boxes">
                                                                      <h6>chính sách hành lý</h6>
                                                                      <ul>
                                                                           <li>đăng ký hành lý : <span>15 kg</span></li>
                                                                           <li>hành lý xách tay: <span>7 kg</span></li>
                                                                      </ul>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="review_box">
                                                  <div className="title-top">
                                                       <h5>thông tin nhà lữ hành</h5>
                                                  </div>
                                                  <div className="flight_detail">
                                                       <div className="row form_flight">
                                                            <div className="col-md-12">
                                                                 <form>
                                                                      <h6>người lớn 1</h6>
                                                                      <div className="form-row">
                                                                           <div className="form-group col-md-2">
                                                                                <label htmlFor="inputState">tiêu đề</label>
                                                                                <select id="inputState" className="form-control">
                                                                                     <option selected>Chọn...</option>
                                                                                     <option>Mr.</option>
                                                                                     <option>Ms.</option>
                                                                                     <option>Mrs.</option>
                                                                                </select>
                                                                           </div>
                                                                           <div className="form-group col-md-5">
                                                                                <label htmlFor="first">Tên</label>
                                                                                <input type="text" className="form-control" id="firstt" />
                                                                           </div>
                                                                           <div className="form-group col-md-5">
                                                                                <label htmlFor="last">Họ</label>
                                                                                <input type="text" className="form-control" id="lastt" />
                                                                           </div>
                                                                      </div>
                                                                 </form>
                                                                 <form>
                                                                      <h6>người lớn 2</h6>
                                                                      <div className="form-row">
                                                                           <div className="form-group col-md-2">
                                                                                <label htmlFor="input">tiêu đề</label>
                                                                                <select id="input" className="form-control">
                                                                                     <option selected>Chọn...</option>
                                                                                     <option>Mr.</option>
                                                                                     <option>Ms.</option>
                                                                                     <option>Mrs.</option>
                                                                                </select>
                                                                           </div>
                                                                           <div className="form-group col-md-5">
                                                                                <label htmlFor="first">Tên</label>
                                                                                <input type="text" className="form-control" id="first" />
                                                                           </div>
                                                                           <div className="form-group col-md-5">
                                                                                <label htmlFor="last">Họ</label>
                                                                                <input type="text" className="form-control" id="last" />
                                                                           </div>
                                                                      </div>
                                                                 </form>
                                                                 <form>
                                                                      <h6>thông tin liên lạc</h6>
                                                                      <div className="form-row">
                                                                           <div className="form-group col-md-6">
                                                                                <label htmlFor="inputEmail4">Email</label>
                                                                                <input type="email" className="form-control" id="inputEmail4" />
                                                                           </div>
                                                                           <div className="form-group col-md-6">
                                                                                <label htmlFor="inputnumber">Số điện thoại</label>
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
                                                       <h5>bảo hiểm du lịch</h5>
                                                  </div>
                                                  <div className="flight_detail">
                                                       <div className="row">
                                                            <div className="col-md-12">
                                                                 <div className="boxes">
                                                                      <h6>bảo đảm an toàn cho chuyến đi của bạn với bảo hiểm du lịch chỉ $25/người</h6>
                                                                      <div className="form-check">
                                                                           <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                                           <label className="form-check-label" htmlFor="exampleRadios1">
                                                                                Vâng, tôi muốn mua bảo hiểm
                        </label>
                                                                      </div>
                                                                      <div className="form-check">
                                                                           <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                                                                           <label className="form-check-label" htmlFor="exampleRadios2">
                                                                                Không, tôi không muốn mua bảo hiểm
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
                                                            <h5>tóm tắt</h5>
                                                       </div>
                                                       <div className="flight_detail">
                                                            <div className="summery_box">
                                                                 <table className="table table-borderless">
                                                                      <tbody>
                                                                           <tr>
                                                                                <td>Người lớn (3 X $2501)</td>
                                                                                <td>$250</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>Thuế</td>
                                                                                <td>$25</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>Bảo hiểm</td>
                                                                                <td>$15</td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td>Phí giao dịch</td>
                                                                                <td>$18</td>
                                                                           </tr>
                                                                      </tbody>
                                                                 </table>
                                                                 <div className="grand_total">
                                                                      <h5>thành tiền: <span>$2500</span></h5>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="review_box">
                                                       <div className="flight_detail">
                                                            <div className="promo-section">
                                                                 <div className="form-group mb-0">
                                                                      <label>có mã giảm giá?</label>
                                                                      <div className="input-group">
                                                                           <input type="text" className="form-control" placeholder="Promo Code" />
                                                                           <div className="input-group-prepend">
                                                                                <span className="input-group-text btn">Dùng</span>
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
                                                                                          Dùng mã RICA50, giảm 50$ cho lần đặt vé đầu tiên
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
                                                                                          Dùng mã FLY10, nhận giảm giá 10% lên đến 50$ khi đặt vé
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
                                                                                          Giảm giá 80% + Hoàn tiền lên đến 40% khi đặt vé &amp; hơn nữa +
                                                                                          Giảm thêm 10% khi thanh toán qua ICICI Cards (ngày 10 - 13, Tháng 10)
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
                                   <Link type="submit" className="btn btn-solid" to={`${match.path}/bookingsession/bookingaddons`}>tiếp tục đặt vé</Link>
                              </div>
                         </div>
                    </section>
                    {/* booking section end */}
                    {/* book now section start */}
                    {/* <div className="book-panel">
                         <h6 className="mb-0 text">thành tiền : <span>$2500</span></h6>
                         <button type="button" onclick="window.location.href='flight-booking-addons.html'" className="btn bottom-btn theme-color">Tiếp tục</button>
                    </div> */}
                    {/* book now section end */}
               </div>

          )
     }
}
