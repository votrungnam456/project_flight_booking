import React, { Component } from 'react'

export default class ListingNotFound extends Component {
     render() {
          return (
               <div>
                    {/* search section start */}
                    <div className="bg-inner small-section pb-0">
                         <div className="container">
                              <div className="flight-search">
                                   <div className="responsive-detail">
                                        <div className="destination">
                                             <span>dubai</span>
                                             <span><i className="fas fa-long-arrow-alt-right" /></span>
                                             <span>paris</span>
                                        </div>
                                        <div className="details">
                                             <span>T.Ba, ngày 19/08/2019</span>
                                             <span className="divider">|</span>
                                             <span>2 người lớn</span>
                                        </div>
                                        <div className="modify-search">
                                             <a href="javascript:void(0)" className="btn btn-solid color1"> tìm kiếm tùy chọn</a>
                                        </div>
                                   </div>
                                   <div className="flight-search-detail">
                                        <form className="row m-0">
                                             <div className="col-lg-2">
                                                  <div className="form-group">
                                                       <label>Từ</label>
                                                       <input type="text" className="form-control open-select" id="exampleInputEmail1" defaultValue="dubai(DXB)" placeholder="from" />
                                                       <img src="../assets/images/icon/from.png" className="img-fluid blur-up lazyload" alt />
                                                  </div>
                                             </div>
                                             <div className="col-lg-2">
                                                  <div className="form-group">
                                                       <label>Tới</label>
                                                       <input type="text" className="form-control open-select" defaultValue="paris(PAR)" placeholder="to" />
                                                       <img src="../assets/images/icon/location.png" className="img-fluid blur-up lazyload" alt />
                                                  </div>
                                             </div>
                                             <div className="col-lg-2">
                                                  <div className="form-group">
                                                       <label>Ngày khởi hành</label>
                                                       <input placeholder="Depart Date" defaultValue="10/01/2019" id="datepicker" />
                                                  </div>
                                             </div>
                                             <div className="col-lg-2">
                                                  <div className="form-group">
                                                       <label>Ngày trở về</label>
                                                       <input placeholder="Return Date" id="datepicker1" />
                                                  </div>
                                             </div>
                                             <div className="col-lg-2">
                                                  <div className="form-group">
                                                       <label>nhà lữ hành &amp; hạng</label>
                                                       <input type="text" className="form-control  open-select" defaultValue="1 traveller" placeholder="to" />
                                                       <img src="../assets/images/icon/user.png" className="img-fluid blur-up lazyload" alt />
                                                       <div className="selector-box-flight">
                                                            <div className="room-cls">
                                                                 <div className="qty-box">
                                                                      <label>người lớn</label>
                                                                      <div className="input-group">
                                                                           <button type="button" className="btn quantity-left-minus" data-type="minus" data-field> - </button>
                                                                           <input type="text" name="quantity" className="form-control qty-input input-number" defaultValue={1} />
                                                                           <button type="button" className="btn quantity-right-plus" data-type="plus" data-field>+</button>
                                                                      </div>
                                                                 </div>
                                                                 <div className="qty-box">
                                                                      <label>trẻ em</label>
                                                                      <div className="input-group">
                                                                           <button type="button" className="btn quantity-left-minus" data-type="minus" data-field> - </button>
                                                                           <input type="text" name="quantity" className="form-control qty-input input-number" defaultValue={1} />
                                                                           <button type="button" className="btn quantity-right-plus" data-type="plus" data-field> + </button>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="flight-class">
                                                                 <div className="form-check">
                                                                      <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                                      <label className="form-check-label" htmlFor="exampleRadios1">
                                                                           hạng phổ thông
                    </label>
                                                                 </div>
                                                                 <div className="form-check">
                                                                      <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                                                                      <label className="form-check-label" htmlFor="exampleRadios2">
                                                                           hạng cao cấp
                    </label>
                                                                 </div>
                                                                 <div className="form-check">
                                                                      <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3" />
                                                                      <label className="form-check-label" htmlFor="exampleRadios3">
                                                                           hạng thương gia
                    </label>
                                                                 </div>
                                                            </div>
                                                            <div className="bottom-part">
                                                                 <a href="javascript:void(0)" className="btn">Áp dụng</a>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-lg-2">
                                                  <div className="search-btn">
                                                       <a href="#" className="btn btn-solid color1">tìm kiếm</a>
                                                  </div>
                                             </div>
                                             <div className="responsive-close">
                                                  <i className="far fa-times-circle" />
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* search section end */}

               </div>
          )
     }
}
