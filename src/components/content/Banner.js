import React, { Component } from 'react'

export default class Banner extends Component {
     render() {
          return (
               <section className="p-0 banner-section full-banner">
                    <div className="section-b-space section-t-space black-layer">
                         <img src="../assets/images/flights/sky2.jpg" alt className="bg-img" />
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-6">
                                        <div className="place-image">
                                             <img src="../assets/images/flights/map.png" alt className="img-fluid blur-up lazyload wow zoomIn" />
                                        </div>
                                   </div>
                                   <div className="col-lg-5 offset-lg-1">
                                        <div className="banner-content">
                                             <div>
                                                  <h5>ưu đãi đặc biệt, tour du lịch thiên nhiên</h5>
                                                  <h2>chiết khấu <span>20-30%</span></h2>
                                                  <p>Lorem Ipsum đơn giản là một ngành công nghiệp in ấn văn bản giả.
                                                  Lorem Ipsum đã trở thành tiêu chuẩn của ngành công nghiệp từ những năm 1500,</p>
                                                  <h2 className="price">$420</h2>
                                                  <div className="bottom-section">
                                                       <a href="flight-booking.html" className="btn btn-rounded btn-sm color1">mua ngay</a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          )
     }
}
