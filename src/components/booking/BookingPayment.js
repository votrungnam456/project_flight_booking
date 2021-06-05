import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux"; 
import * as actions from "../../actions/index";

class BookingPayment extends Component {
  constructor(props) {
    super(props);
  }

  onBooking = () => {
    
    let INFO_BOOKING = JSON.parse(localStorage.getItem("INFO_BOOKING"));
    let GIA_IDVE = JSON.parse(localStorage.getItem("GIA_IDVE"));
    this.props.bookingTicket({
      hoTen : (INFO_BOOKING.ho + " " + INFO_BOOKING.ten),
      cmnd : INFO_BOOKING.cmnd,
      soDienThoai : INFO_BOOKING.sdt,
      email : INFO_BOOKING.email,
      nguoiDatVe_id : this.props.user.id,
      thanhTien : GIA_IDVE.gia,
      roleDatVe : 2,
      vechuyenbayID : GIA_IDVE.idVe
    });
  }



  render() {
    let GIA_IDVE = JSON.parse(localStorage.getItem("GIA_IDVE"));
    return (
      <div>
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
                            <div
                              className="btn btn-link"
                              data-toggle="collapse"
                              data-target="#one"
                              aria-expanded="true"
                              aria-controls="one"
                            >
                              <label htmlFor="r_one">
                                <input
                                  type="radio"
                                  className="radio_animated ml-0"
                                  defaultChecked
                                  id="r_one"
                                  name="occupation"
                                  defaultValue="Working"
                                  required
                                />
                                thẻ tín dụng
                              </label>
                            </div>
                          </div>
                          <div
                            id="one"
                            className="collapse show"
                            aria-labelledby="h_one"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              <form>
                                <div className="form-group">
                                  <label htmlFor="name">tên chủ sỡ hữu</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="number">số thẻ</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="number"
                                  />
                                  <img
                                    src="../assets/images/creditcards.png"
                                    alt
                                    className="img-fluid blur-up lazyload"
                                  />
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
                                      <option>2020</option>
                                      <option>2019</option>
                                      <option>2018</option>
                                      <option>2017</option>
                                      <option>2016</option>
                                      <option>2015</option>
                                      <option>2014</option>
                                      <option>2013</option>
                                      <option>2012</option>
                                      <option>2011</option>
                                      <option>2010</option>
                                      <option>2009</option>
                                      <option>2008</option>
                                      <option>2006</option>
                                      <option>2005</option>
                                      <option>2004</option>
                                      <option>2003</option>
                                      <option>2002</option>
                                      <option>2001</option>
                                      <option>2000</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="payment-btn">
                                  <Link
                                    onClick={this.onBooking}
                                    type="button"
                                    className="btn btn-solid color1"
                                    to={`/bookingsuccess`}
                                  >
                                    thanh toán
                                  </Link>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="h_four">
                            <div
                              className="btn btn-link"
                              data-toggle="collapse"
                              data-target="#four"
                              aria-expanded="true"
                              aria-controls="four"
                            >
                              <label htmlFor="r_four">
                                <input
                                  type="radio"
                                  className="radio_animated ml-0"
                                  id="r_four"
                                  name="occupation"
                                  defaultValue="Working"
                                  required
                                />{" "}
                                Ví của tôi
                              </label>
                            </div>
                          </div>
                          <div
                            id="four"
                            className="collapse"
                            aria-labelledby="h_four"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              <form className="wallet-section">
                                <h6>chọn ví của bạn</h6>
                                <div className="form-row">
                                  <div className="form-check col-md-6">
                                    <input
                                      className="form-check-input radio_animated"
                                      type="radio"
                                      name="exampleRadios"
                                      id="exampleRadios1"
                                      defaultValue="option1"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="exampleRadios1"
                                    >
                                      Adyen
                                    </label>
                                  </div>
                                  <div className="form-check col-md-6">
                                    <input
                                      className="form-check-input radio_animated"
                                      type="radio"
                                      name="exampleRadios"
                                      id="exampleRadios2"
                                      defaultValue="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="exampleRadios2"
                                    >
                                      Airtel Money
                                    </label>
                                  </div>
                                  <div className="form-check col-md-6">
                                    <input
                                      className="form-check-input radio_animated"
                                      type="radio"
                                      name="exampleRadios"
                                      id="exampleRadios3"
                                      defaultValue="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="exampleRadios3"
                                    >
                                      AlliedWallet
                                    </label>
                                  </div>
                                  <div className="form-check col-md-6">
                                    <input
                                      className="form-check-input radio_animated"
                                      type="radio"
                                      name="exampleRadios"
                                      id="exampleRadios4"
                                      defaultValue="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="exampleRadios4"
                                    >
                                      Apple Pay
                                    </label>
                                  </div>
                                  <div className="form-check col-md-6">
                                    <input
                                      className="form-check-input radio_animated"
                                      type="radio"
                                      name="exampleRadios"
                                      id="exampleRadios5"
                                      defaultValue="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="exampleRadios5"
                                    >
                                      Brinks
                                    </label>
                                  </div>
                                  <div className="form-check col-md-6">
                                    <input
                                      className="form-check-input radio_animated"
                                      type="radio"
                                      name="exampleRadios"
                                      id="exampleRadios6"
                                      defaultValue="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="exampleRadios6"
                                    >
                                      CardFree
                                    </label>
                                  </div>
                                </div>
                                <div className="payment-btn">
                                  <Link
                                    onClick={this.onBooking}
                                    type="button"
                                    className="btn btn-solid color1"
                                    to={`/bookingsuccess`}
                                  >
                                    thanh toán
                                  </Link>
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
                          <div className="top-detail"></div>
                          <table className="table table-borderless">
                            <tbody>
                              <tr>
                                <td>giá vé</td>
                                <td>{GIA_IDVE.gia} VND</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="grand_total">
                            <h5>
                              thành tiền: <span>{GIA_IDVE.gia} VND</span>
                            </h5>
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
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

var mapDispatchToProps = (dispatch, props) => {
  return {
    bookingTicket: (info_booking) => {
      dispatch(actions.actBookingTicketCallApi(info_booking));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingPayment);
