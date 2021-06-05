import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions/index";

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanBayDiID: null,
      sanBayDenID: null,
      ngayDi: null,
      ngayVe: null,
      hanhTrinh: null,
      loaiVe: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchSanBays();
  }

  handleChange(event) {
    event.preventDefault();
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSearch = (event) => {
    event.preventDefault();
    console.log(this.state);
    if(this.state.sanBayDiID == null || this.state.sanBayDenID == null || this.state.ngayDi == null || (this.state.ngayVe == null && this.state.hanhTrinh == "KH"))
    {
       return;
    }
    this.props.searchFlights(this.state);
  };

  render() {
    var flights = this.props.data;
    return (
      <div>
        <div>
          <div className="bg-inner small-section pb-0">
            <div className="container">
              <div className="flight-search">
                <div className="flight-search-detail">
                  <form className="row m-0" onSubmit={this.onSearch}>
                    <div className="col-lg-2">
                      <div className="form-group">
                        <label>Từ</label>
                        <select
                          name="sanBayDiID"
                          className="form-control open-select"
                          value={this.state.sanBayDiID}
                          onChange={this.handleChange}
                        >
                          <option>Từ ... </option>
                          {this.showSanBayDi(flights)}
                        </select>
                        <img
                          src="../assets/images/icon/from.png"
                          className="img-fluid blur-up lazyload"
                          alt
                        />
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="form-group">
                        <label>Đến</label>
                        <select
                          name="sanBayDenID"
                          className="form-control open-select"
                          value={this.state.sanBayDenID}
                          onChange={this.handleChange}
                        >
                          <option>Đến ... </option>
                          {this.showSanBayDen(flights, this.state.sanBayDiID)}
                        </select>
                        <img
                          src="../assets/images/icon/location.png"
                          className="img-fluid blur-up lazyload"
                          alt
                        />
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="form-group">
                        <label>Ngày khởi hành</label>
                        <input
                          name="ngayDi"
                          placeholder="Depart Date"
                          id="datepicker"
                          className="form-control open-select"
                          type="date"
                          min= "2021-05-15" //{this.getDate()}
                          max="2030-01-01"
                          value={this.state.ngayDi}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                      {this.showNgayVe()}
                    <div className="col-lg-2">
                      <div className="form-group">
                        <label>Loại hành trình</label>
                        <select
                          name="hanhTrinh"
                          className="form-control open-select"
                          value={this.state.hanhTrinh}
                          onChange={this.handleChange}
                        >
                          <option>Loại hàng trình ...</option>
                          <option value="MC">Một chiều</option>
                          <option value="KH">Khứ hồi</option>
                        </select>
                        <img
                          src="../assets/images/icon/user.png"
                          className="img-fluid blur-up lazyload"
                          alt
                        />
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="search-btn">
                        
                        <button type="submit" className="btn btn-solid color1">
                        tìm kiếm
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="form-group">
                      <label>Loại vé</label>
                        <select
                          name="loaiVe"
                          className="form-control open-select"
                          value={this.state.loaiVe}
                          onChange={this.handleChange}
                        >
                          <option>Loại vé ...</option>
                          <option value="PT">Vé phổ thông</option>
                          <option value="TG">Vé thương gia</option>
                        </select>
                        <img
                          src="../assets/images/icon/user.png"
                          className="img-fluid blur-up lazyload"
                          alt
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
    );
  }

  showNgayVe = () => {
    if(this.state.hanhTrinh == "KH")
    {
      return <div className="col-lg-2">
              <div className="form-group">
                      <label>Ngày trở về</label>
                      <input
                        name="ngayVe"
                        className="form-control open-select"
                        type="date"
                        min={this.state.ngayDi}
                        max="2022-01-01"
                        placeholder="Return Date"
                        id="datepicker1"
                        value={this.state.ngayVe}
                        onChange={this.handleChange}
                      />
                    </div>
            </div>
    }
  }

  getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    return (today = yyyy + "-" + mm + "-" + dd);
  };

  showSanBayDi = (flights) => {
    var result = null;
    if (flights) {
      result = flights.map((item, index) => {
        return (
          <option key={index} value={item.id}>
            {item.tenSanBay}
          </option>
        );
      });
    }
    return result;
  };

  showSanBayDen = (flights, id) => {
    var result = null;
    if (flights) {
      result = flights.map((item, index) => {
        if (item.id != id) {
          return (
            <option key={index} value={item.id}>
              {item.tenSanBay}
            </option>
          );
        }
      });
    }
    return result;
  };
}

var mapStateToProps = (state) => {
  return {
    data: state.sanbay,
  };
};

var mapDispatchToProps = (dispatch, props) => {
  return {
    fetchSanBays: () => {
      dispatch(actions.actFetchSanBaysCallApi());
    },
    searchFlights: (flight) => {
      dispatch(actions.actSearchFlightsCallApi(flight));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
