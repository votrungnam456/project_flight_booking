import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../actions/index";

class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoTen: null,
      cmnd: null,
      email: null,
      soDienThoai: null,
      matKhau: null,
      tinhTrang: true,
      id: null
    };
    this.handleChange = this.handleChange.bind(this);
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

  register = (event) => {
    event.preventDefault();
    if(this.state.hoTen == null || this.state.cmnd == null || this.state.email == null || this.state.soDienThoai == null || this.state.matKhau == null)
    {
       return;
    }
    this.props.resgisterUser(this.state);
  };

  render() {
    var { history, data } = this.props;
    console.log(data, this.state);
    if(data.email === this.state.email && data.cmnd === this.state.cmnd && data.soDienThoai === this.state.soDienThoai)
    {
      history.goBack();
    }

    var notification = "";
    if(data.email === "Duplicate")
    {
      notification += "Đã tồn tại Email này"
    }

    if(data.soDienThoai === "Duplicate")
    {
      notification += "Đã tồn tại Số điện thoại này"
    }

    if(data.cmnd === "Duplicate")
    {
      notification += "Đã tồn tại cmnd này"
    }
    return (
      <div>
        <section class="section-b-space animated-section dark-cls">
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
                    <h3>Đăng ký</h3>
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
                  <h1 id="notification">{notification}</h1>
                  <form onSubmit={this.register}>
                    <div class="form-group">
                      <label for="name">Họ tên</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập họ tên"
                        name="hoTen"
                        value={this.state.hoTen}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="name">CMND</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập chứng minh nhân dân"
                        name="cmnd"
                        value={this.state.cmnd}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="name">Số điện thoại</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập số điện thoại"
                        name="soDienThoai"
                        value={this.state.soDienThoai}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Nhập địa chỉ email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
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
                        Đăng ký
                      </button>
                      <div class="divider">
                        <h6>or</h6>
                      </div>
                      <Link
                        to={`/login`}
                        className="w-100 btn btn-solid btn-outline"
                      >
                        Đăng nhập
                      </Link>
                    </div>
                  </form>
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
    data: state.user,
  };
};

var mapDispatchToProps = (dispatch, props) => {
  return {
    resgisterUser: (infoUser) => {
      dispatch(actions.actRegisterCallApi(infoUser));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(register);
