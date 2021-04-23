import React, { Component } from 'react'

export default class Blog extends Component {
     render() {
          return (
               <section className="blog-section dark-cls section-b-space ">
                    <img src="../assets/images/cab/grey-bg.jpg" alt className="img-fluid blur-up lazyload bg-img" />
                    <div className="container">
                         <div className="title-1 title-5">
                              <span className="title-label">new</span>
                              <h2>Blog của chúng tôi</h2>
                              <p>Xem những câu chuyện về du lịch &amp; sân bay</p>
                         </div>
                         <div className="slide-2  no-arrow ">
                              <div>
                                   <div className="blog-box">
                                        <div className="img-part">
                                             <div>
                                                  <img src="../assets/images/flights/blog/5.jpg" className="img-fluid blur-up lazyload w-100" alt />
                                             </div>
                                             <div className="blog-date">
                                                  <div>
                                                       <h5>24</h5>
                                                       <h6>feb</h6>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="blog-content">
                                             <div>
                                                  <h5>09 tháng 02, 2019</h5>
                                                  <p>Lorem Ipsum đơn giản là
                                                  một ngành công nghiệp về in ấn
                văn bản giả..</p>
                                                  <h6>Lorem Ipsum đã trở thành tiêu chuẩn...</h6>
                                                  <a href="blog-detail-video.html" className="btn btn-rounded btn-sm color1">đọc thêm</a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <div className="blog-box">
                                        <div className="img-part">
                                             <div>
                                                  <img src="../assets/images/flights/blog/6.jpg" className="img-fluid blur-up lazyload w-100" alt />
                                             </div>
                                             <div className="blog-date">
                                                  <div>
                                                       <h5>27</h5>
                                                       <h6>aug</h6>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="blog-content">
                                             <div>
                                                  <h5>january 9, 2019</h5>
                                                  <p>Lorem Ipsum is simply the
                                                  of the printing and
                dummy text of typesetting..</p>
                                                  <h6>Lorem Ipsum is simply dummy since..</h6>
                                                  <a href="blog-detail-video.html" className="btn btn-rounded btn-sm color1">read more</a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <div className="blog-box">
                                        <div className="img-part">
                                             <div>
                                                  <img src="../assets/images/flights/blog/4.jpg" className="img-fluid blur-up lazyload w-100" alt />
                                             </div>
                                             <div className="blog-date">
                                                  <div>
                                                       <h5>01</h5>
                                                       <h6>jan</h6>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="blog-content">
                                             <div>
                                                  <h5>january 9, 2019</h5>
                                                  <p>Lorem Ipsum is simply the
                                                  of the printing and
                dummy text of typesetting..</p>
                                                  <h6>Lorem Ipsum is simply dummy since..</h6>
                                                  <a href="blog-detail-video.html" className="btn btn-rounded btn-sm color1">read more</a>
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
