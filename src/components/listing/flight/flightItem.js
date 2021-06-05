import React, { Component } from "react";
import { Link } from "react-router-dom";

class flightItem extends Component {

  render() {
    var { flight } = this.props;
    return (
        <div className="detail-bar">
        <div className="detail-wrap wow fadeInUp">
          <div className="row">
            <div className="col-xl-3 col-md-2">
              <div className="logo-sec">
                {this.showImgHangBay(flight.hangVe)}
                <span className="title">{flight.hangVe}</span>
              </div>
            </div>
            <div className="col-md-5">
              <div className="airport-part">
                <div className="airport-name">
                  <h4>{flight.gio}</h4>
                  <h6>{flight.codeSanDi}</h6>
                </div>
                <div className="airport-progress">
                  <div className="stop">
                    {flight.ngay}
                  </div>
                </div>
                <div className="airport-name arrival">
                  <h4>{this.converTime(flight.gio, flight.thoiGianBay)}</h4>
                  <h6>{flight.codeSanDen}</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="price">
                <div>
                  <h4>{parseInt(flight.donGia)} VND</h4>
                  <span>không hoàn tiền</span>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-3">
              <div className="book-flight">
                <Link to={`/booking/${flight.id}/${flight.idVe}`} className="btn btn-solid color1 ">
                    đặt vé ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
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

export default flightItem;
