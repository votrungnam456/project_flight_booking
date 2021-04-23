import React, { Component } from 'react'

export default class NotFound extends Component {
     render() {
          return (
               <section className=" section-b-space bg-inner success-section">
                    <div className="container">
                         <div className="row success-detail mt-0">
                              <div className="col">
                                   <img src="../assets/images/icon/failure-icon.png" className="img-fluid blur-up lazyload" alt />
                                   <h2>Lỗi 404! Có gì đó không ổn</h2>
                                   <p>Có vẻ như trang bạn vừa truy cập đã được chỉnh sửa hoặc xóa bỏ. Vui lòng quay lại sau hoặc tìm kiếm lại.</p>
                                   <button type="submit" className="btn btn-solid color1">Trở về trang chủ</button>
                              </div>
                         </div>
                    </div>
               </section>

          )
     }
}
