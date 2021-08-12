import { data } from "jquery";
import React, { Component } from "react";
import { Link } from "react-scroll";
import Sticky from "react-stickynode";
import { Menu, Dropdown, Icon ,Button} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { getLocale } from "../locales/index";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);


class OnepageMenu extends Component {
  changeLanguage() {
  let locale = localStorage.getItem("language")
    if (locale === "en") {
        localStorage.setItem("language", "mn")
    }
    else {
        localStorage.setItem("language", "en")
    }
}  
  render() {
    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
         
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link to="home">
                <img
                  src={require("../img/farologo.png")}
                  width="90.9px"
                  height="36px"
                  alt=""
                />
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      { getLocale("Header1") }
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="h_security_area"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                    >
                      { getLocale("Header2") }
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="row faroNews"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={1000}
                    >
                      { getLocale("Header3") }
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="app_featured_area_two"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                    >
                      { getLocale("Header4") }
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="footer_top"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                    >
                      { getLocale("Header5") }
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="myAdress"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={1000}
                    >
                      { getLocale("Header6") }
                    </Link>
                    </li>
                     <li className="nav-item">
                    <Button type="nav-link" ghost style={{color:"black"}} onClick={this.changeLanguage} href="/Landing">{localStorage.getItem("language")}</Button></li>
                </ul>
                {/* <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">
                  Get Started
                </a> */}
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default OnepageMenu;
