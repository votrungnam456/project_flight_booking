import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom'

const menus = [
    {
        name: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        name: "Danh sách vé máy bay",
        to: "/listing",
        exact: true
    },
    {
        name: "Đặt vé",
        to: "/booking",
        exact: true
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            let active = match ? 'active abcClassTest ' : '';
            return (
                <li>
                    <Link className="nav-link menu-title" to={to}>{label}</Link>
                </li>
            )
        }}></Route>
    )
}

class Menu extends Component {
    render() {
        return (
            <div>

                {/*<!--Màn hình chờ - mở -->*/}
                {/* <div className="loader-wrapper img-gif">
                    <img src="../assets/images/loader.gif" alt="" />
                </div> */}
                {/*<!-- Màn hình chờ - đóng -->*/}

                {/*<!--Menu - mở -->*/}
                <header className="overlay-black">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="menu">
                                    <div className="brand-logo">
                                        <a href="http://themes.pixelstrap.com/rica/index.html">
                                            <img src="../assets/images/icon/footer-logo.png" alt="true" className="img-fluid blur-up lazyload" />
                                        </a>
                                    </div>
                                    <nav>
                                        <div className="main-navbar">
                                            <div id="mainnav">
                                                <div className="toggle-nav"><i className="fa fa-bars sidebar-bar" /></div>
                                                <div className="menu-overlay" />
                                                <ul className="nav-menu">
                                                    <li className="back-btn">
                                                        <div className="mobile-back text-right">
                                                            <span>Back</span>
                                                            <i aria-hidden="true" className="fa fa-angle-right pl-2" />
                                                        </div>
                                                    </li>
                                                    {this.showMenu(menus)}
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/*<!--Menu - mở -->*/}
            </div>
        );
    }
    showMenu = (menus) =>{
        let result = null
        if(menus.length > 0){
            result = menus.map((menu,index) => {
                return (<MenuLink key = {index} label={menu.name} to = {menu.to} activeOnlyWhenExact={menu.exact}></MenuLink>)
            })
        }
        return result
    }
}

export default Menu;