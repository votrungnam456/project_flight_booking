import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../actions/index";

class BookSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ho: null,
      ten: null,
      cmnd: null,
      sdt: null,
      email: null,
      booking: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    let { match } = this.props;
    this.props.findOneChuyenBay(match.params.id, match.params.idVe);
  }

  handleChange(event) {
    event.preventDefault();
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    localStorage.setItem("INFO_BOOKING", JSON.stringify(this.state));
    console.log(this.state);
  }

  render() {
    let { chuyenbay, match, user, history } = this.props;
    localStorage.setItem("GIA_IDVE", JSON.stringify({gia : parseInt(chuyenbay.donGia) + 120000 + 50000, idVe : match.params.idVe}));
    
    if (user.hoTen == undefined) {
      history.replace("/login?id=1");
    }

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
                                {chuyenbay.codeSanDi} <span>{chuyenbay.gio}</span>
                              </h6>
                            </div>
                            <div className="airport-progress">
                              <i className="fas fa-plane-departure float-left" />
                              <i className="fas fa-plane-arrival float-right" />
                            </div>
                            <div className="airport-name arrival">
                              <h6>
                              {chuyenbay.codeSanDen} <span>{this.converTime(chuyenbay.gio, chuyenbay.thoiGianBay)}</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="duration">
                            <div>
                              <h6>{chuyenbay.ngay}</h6>
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
                          <form onSubmit={this.onSaveInfo}>
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
                                  name="ten"
                                  type="text"
                                  className="form-control"
                                  id="firstt"
                                  value={this.state.ten}
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="form-group col-md-5">
                                <label htmlFor="last">Họ</label>
                                <input
                                  name="ho"
                                  type="text"
                                  className="form-control"
                                  id="lastt"
                                  value={this.state.ho}
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <br></br>
                            <h6>thông tin liên lạc</h6>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input
                                  name="email"
                                  type="email"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.email}
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputnumber">
                                  Số điện thoại
                                </label>
                                <input
                                  name="sdt"
                                  type="number"
                                  className="form-control"
                                  id="inputnumber"
                                  value={this.state.sdt}
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputnumber">
                                  CMND
                                </label>
                                <input
                                  name="cmnd"
                                  type="text"
                                  className="form-control"
                                  value={this.state.cmnd}
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <label htmlFor="inputState">Đặt cho: </label>
                                <select
                                  name="booking"
                                  id="inputState"
                                  className="form-control"
                                  onChange={this.handleChange}
                                >
                                  <option>cho ...</option>
                                  <option value="BT">Bản thân</option>
                                  <option value="NT">Người thân</option>
                                </select>
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
                                <td> {parseInt(chuyenbay.donGia)} VND</td>
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
                              thành tiền: <span>{parseInt(chuyenbay.donGia) + 120000 + 50000} VND</span>
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
                to={`/bookingpayment/`}
              >
                tiếp tục đặt vé
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  converTime = (gio, thoiGianBay) => {
    var h = parseInt(gio);
    var time = parseInt(thoiGianBay);

    var result = time + h;
    if(result > 23) {
      result -= 23;
    }
    if(result < 10) {
      return "0" + result + ".00"
    } else {
      return result + ".00"
    }
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
    user : state.user,
  };
};

var mapDispatchToProps = (dispatch, props) => {
  return {
    findOneChuyenBay: (id, idVe) => {
      dispatch(actions.actFindOneChuyenBayCallApi(id, idVe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookSession);
