import React, { Component } from 'react';

class menu_content extends Component {
    render() {
        return (
            <section className="cab-section flight-section home-section p-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="flight-left h-100">
                            <img src="../assets/images/flights/plane-1.png" className="img-fluid blur-up lazyload plane-animation" alt="true" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cab-content">
                            <div>
                                <div className="top-cls">
                                    #VHL
                                </div>
                                <h2>Hãy bắt đầu cuộc hành trình của bạn</h2>
                                <h3>chỉ với vài thao tác nhỏ</h3>
                                <a href="http://localhost:3000/listing" className="btn btn-rounded btn-sm color1 float-right">Đặt ngay</a>
                                
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default menu_content;