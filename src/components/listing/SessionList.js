import React, { Component } from "react";
import FlightItem from './flight/flightItem'
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class SessionList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var flights = this.props.data;
    return (
      <section className="pt-0 bg-inner small-section loader-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ratio3_2">
              <div className="flight-detail-sec full_width-detail">
                
              {this.showFlightItem(flights)}

              </div>
              <nav
                aria-label="Page navigation example"
                className="pagination-section mt-0"
              >
              </nav>
            </div>
          </div>
        </div>
      </section>
    );
  }

  showFlightItem = (flights) => {
    var result = null;
    if (flights.length > 0) {
      result = flights.map((item, index) => {
        return <FlightItem key={index} flight={item} />;
      });
    } else {
      return <h1 className="notify">Không có chuyến bay!</h1>
    }
    return result;
  };
}
var mapStateToProps = (state) => {
  return {
    data: state.flight
  };
};

var mapDispatchToProps = (dispatch, props) => {
  return {
    searchFlights :() =>  {
      dispatch(actions.actSearchFlights());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionList);
