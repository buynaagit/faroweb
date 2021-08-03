import React, { Component } from "react";
import { Link } from "react-scroll";
import Sticky from "react-stickynode";

class OnepageMenu extends Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(">>>>>>>>>>>>>>", data);
  }

  render() {
    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              {/* <Link className={`navbar-brand ${slogo}`} to="/"> */}
              <Link>
                <img src={require("../img/faro.png")} alt="" />
                {/* <img src={require("../img/logo2.png")} alt="" />
                <img src={require("../img/logo.png")} alt="logo" /> */}
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
                      Нүүр
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="work"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={1000}
                    >
                      Мэдээ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="app_featured_content"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                    >
                      Ажлын байр
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
                      Холбоо барих
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
                      Хаяг
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="features"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                    >
                      Бидний тухай
                    </Link>
                  </li>
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
