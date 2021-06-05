import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../actions/index";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      matKhau: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount()
  {
    this.props.logout();
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

  login = (event) => {
    event.preventDefault();
    if (this.state.email == null || this.state.matKhau == null) {
      return;
    }
    this.props.loginUser(this.state);
  };

  render() {
    var { history, data, match } = this.props;
    var notification = "";

    if(history.location.search === "?id=1") {
      notification = "Đăng nhập rồi mới được đặt vé !!"; 
    }

    if (
      data.email === this.state.email &&
      data.matKhau === this.state.matKhau
    ) {
      history.replace("/");
    }
    return (
      <section class="section-b-space dark-cls animated-section">
        <div class="animation-section">
          <div class="cross po-1"></div>
          <div class="cross po-2"></div>
          <div class="round po-4"></div>
          <div class="round po-5"></div>
          <div class="round r-y po-8"></div>
          <div class="square po-10"></div>
          <div class="square po-11"></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="offset-lg-3 col-lg-6 offset-sm-2 col-sm-8 col-12">
              <div class="account-sign-in">
                <div class="title">
                  <h3>Đăng nhập</h3>
                </div>
                <div class="login-with">
                  <div class="login-social row">
                    <div class="col">
                      <a class="boxes">
                        <img
                          src="../assets/images/icon/social/facebook.png"
                          class="img-fluid blur-up lazyload"
                          alt=""
                        />
                        <h6>facebook</h6>
                      </a>
                    </div>
                    <div class="col">
                      <a class="boxes">
                        <img
                          src="../assets/images/icon/social/google.png"
                          class="img-fluid blur-up lazyload"
                          alt=""
                        />
                        <h6>google</h6>
                      </a>
                    </div>
                  </div>
                  <div class="divider">
                    <h6>OR</h6>
                  </div>
                </div>
                <h2 id="notification">{notification}</h2>
                <form onSubmit={this.login}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Nhập email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất
                      kỳ ai khác
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Mật khẩu</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Mật khẩu"
                      name="matKhau"
                      value={this.state.matKhau}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="button-bottom">
                    <button type="submit" class="w-100 btn btn-solid">
                      Đăng nhập
                    </button>
                    <div class="divider">
                      <h6>or</h6>
                    </div>

                    <Link
                      to={`/register`}
                      className="w-100 btn btn-solid btn-outline"
                    >
                      Đăng ký
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    data: state.user,
  };
};

var mapDispatchToProps = (dispatch, props) => {
  return {
    loginUser: (infoUser) => {
      dispatch(actions.actLoginCallApi(infoUser));
    },
    logout: () => {
      dispatch(actions.actLogout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(login);
