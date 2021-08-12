import { data } from "jquery";
import React, { Component } from "react";
import { Link } from "react-scroll";
import Sticky from "react-stickynode";

class OnepageMenu extends Component {
  render() {
    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link to="home">
                <svg className="navbar-logo" width="100px" height="120" viewBox="0 0 303 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.3936 42.141H24.9017V117.963H13.6558V42.141H0V32.2715H13.6558C13.8699 26.5274 14.3519 22.2454 15.1017 19.4256C18.6361 6.68413 29.4001 0.208816 47.3936 0V10.1828C39.3608 10.1828 33.5771 11.8538 30.0427 15.1958C26.6154 18.5378 24.9017 24.0208 24.9017 31.6449V32.2715H47.3936V42.141ZM147.233 117.963H135.988V102.924H135.666C131.918 108.459 126.991 112.689 120.886 115.614C114.888 118.538 108.409 120 101.447 120C88.166 120 76.9736 115.718 67.8697 107.154C58.766 98.4857 54.2139 87.7285 54.2139 74.8825C54.2139 62.141 58.8194 51.4883 68.0303 42.9243C77.2414 34.3603 88.3802 30.0783 101.447 30.0783C108.516 30.0783 115.049 31.5404 121.047 34.4647C127.152 37.3891 132.025 41.671 135.666 47.3107H135.988V32.2715H147.233V117.963ZM126.349 99.9478C133.203 93.0548 136.63 84.8041 136.63 75.1958C136.63 65.5875 133.203 57.3368 126.349 50.4439C119.601 43.4464 111.301 39.9478 101.447 39.9478C91.0578 39.9478 82.4359 43.3421 75.5812 50.1305C68.8336 56.8147 65.4598 65.2219 65.4598 75.3525C65.4598 85.3786 68.8873 93.6815 75.7418 100.261C82.5966 106.841 91.1648 110.131 101.447 110.131C111.301 110.131 119.601 106.736 126.349 99.9478ZM203.885 41.671C196.065 42.2976 189.908 44.9087 185.409 49.5039C181.017 54.0992 178.822 60.2088 178.822 67.8329V117.963H167.576V32.2715H178.822V44.6475H179.144C181.393 39.53 184.498 35.9268 188.462 33.8381C192.423 31.7494 197.564 30.4961 203.885 30.0783V41.671ZM303 75.0392C303 87.363 298.449 97.9634 289.344 106.841C280.347 115.614 269.531 120 256.892 120C244.468 120 233.704 115.614 224.6 106.841C215.603 98.0679 211.105 87.6763 211.105 75.6658C211.105 63.2377 215.55 52.5326 224.439 43.5509C233.328 34.5693 244.147 30.0783 256.892 30.0783C269.423 30.0783 280.24 34.5169 289.344 43.3943C298.449 52.2716 303 62.8198 303 75.0392ZM291.754 74.5692C291.754 65.1697 288.327 57.0757 281.472 50.2872C274.725 43.3943 266.584 39.9478 257.052 39.9478C247.305 39.9478 239.059 43.4988 232.311 50.6005C225.671 57.598 222.351 65.9008 222.351 75.5091C222.351 84.9086 225.724 93.0548 232.472 99.9478C239.22 106.736 247.413 110.131 257.052 110.131C267.013 110.131 275.259 106.684 281.793 99.7911C288.433 92.7937 291.754 84.3865 291.754 74.5692Z"/>
                </svg>

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
                      to="h_security_area"
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
                      to="row faroNews"
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
                      to="app_featured_area_two"
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
                      to="footer_top"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                    >
                      Холбоо барих
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
