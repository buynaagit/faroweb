import { data } from "jquery";
import React, { Component } from "react";
// import { Link } from "react-scroll";
import Sticky from "react-stickynode";
import { Link } from "react-router-dom";

class OnepageMenuNews extends Component {
  render() {
    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link to="/Landing">
                <img src={require("../img/faro.png")} alt="" />
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
                      to="/Landing"
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
                      to="/Landing"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                    >
                      Бидний тухай
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="/Landing"
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
                      to="/Landing"
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
                      to="/Landing"
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
                      to="/Landing"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={1000}
                    >
                      Хаяг
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default OnepageMenuNews;
