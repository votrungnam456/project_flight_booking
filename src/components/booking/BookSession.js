import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../actions/index";

class BookSession extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let { match } = this.props;
    this.props.findOneChuyenBay(match.params.id);
  }

  render() {
    let { chuyenbay, match } = this.props;
    var d2 = new Date();
    d2.setTime(chuyenbay.ngayGio);


    return (
      <div>
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
                          {this.showImgHangBay(chuyenbay.hangVe)}
                            <span className="title">{chuyenbay.hangVe}</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="airport-part">
                            <div className="airport-name">
                              <h6>
                                {chuyenbay.codeSanDi} <span>17.00</span>
                              </h6>
                            </div>
                            <div className="airport-progress">
                              <i className="fas fa-plane-departure float-left" />
                              <i className="fas fa-plane-arrival float-right" />
                            </div>
                            <div className="airport-name arrival">
                              <h6>
                              {chuyenbay.codeSanDen} <span>17.00</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="duration">
                            <div>
                              <h6>{d2.toString()}</h6>
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
                              <li>
                                phí : <span>100.000 VND</span>
                              </li>
                              <li>
                                Hãng bay này chỉ cho phép hủy vé 2 giờ trước lúc
                                khởi hành.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review_box">
                    <div className="title-top">
                      <h5>thông tin hành khách</h5>
                    </div>
                    <div className="flight_detail">
                      <div className="row form_flight">
                        <div className="col-md-12">
                          <form>
                            <h6>người bay</h6>
                            <div className="form-row">
                              <div className="form-group col-md-2">
                                <label htmlFor="inputState">tiêu đề</label>
                                <select
                                  id="inputState"
                                  className="form-control"
                                >
                                  <option selected>Chọn...</option>
                                  <option>Mr.</option>
                                  <option>Ms.</option>
                                </select>
                              </div>
                              <div className="form-group col-md-5">
                                <label htmlFor="first">Tên</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstt"
                                />
                              </div>
                              <div className="form-group col-md-5">
                                <label htmlFor="last">Họ</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastt"
                                />
                              </div>
                            </div>
                          </form>
                          <form>
                            <h6>thông tin liên lạc</h6>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="inputEmail4"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputnumber">
                                  Số điện thoại
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="inputnumber"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputnumber">
                                  CMND
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </form>
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
                                <td>Người lớn</td>
                                <td> {parseInt(chuyenbay.donGiaPT)} VND</td>
                              </tr>
                              <tr>
                                <td>Thuế</td>
                                <td>120.000 VND</td>
                              </tr>
                              <tr>
                                <td>Phí giao dịch</td>
                                <td>50.000 VND</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="grand_total">
                            <h5>
                              thành tiền: <span>{parseInt(chuyenbay.donGiaPT) + 120000 + 50000} VND</span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="continue-btn">
              <Link
                type="submit"
                className="btn btn-solid"
                to={`/bookingsession/bookingaddons`}
              >
                tiếp tục đặt vé
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  showImgHangBay = (hangBay) => {
    if(hangBay === "VietJetAirline") {
      return <img
      src="../assets/images/flights/airlines/9.png"
      className="img-fluid blur-up lazyload"
    />
    } else if(hangBay === "BambooAirline") {
      return <img
      src="../assets/images/flights/airlines/8.png"
      className="img-fluid blur-up lazyload"
    />
    } else {
      return <img
      src="../assets/images/flights/airlines/logoVN.png"
      className="img-fluid blur-up lazyload"
    />
    }
  }



}

var mapStateToProps = (state) => {
  return {
    chuyenbay: state.chuyenbay,
  };
};

var mapDispatchToProps = (dispatch, props) => {
  return {
    findOneChuyenBay: (id) => {
      dispatch(actions.actFindOneChuyenBayCallApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookSession);
