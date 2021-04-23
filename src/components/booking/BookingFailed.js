import React, { Component } from 'react'

export default class BookingFailed extends Component {
     render() {
          return (
               <section className="bg-inner section-b-space success-section">
                    <div className="container">
                         <div className="row success-detail mt-0">
                              <div className="col">
                                   <img src="../assets/images/icon/failure-icon.png" className="img-fluid blur-up lazyload" alt />
                                   <h2>Xin lỗi, chúng tôi không thể thực hiện việc thanh toán</h2>
                                   <p>Có vẻ chúng tôi đã gặp một vài lỗi. vui lòng thử lại sau. nếu bạn vẫn tiếp tục gặp lỗi này, vui lòng thử phương thức thanh toán khác.</p>
                                   <button type="submit" className="btn btn-solid color1">thử lại</button>
                              </div>
                         </div>
                    </div>
               </section>

          )
     }
}
