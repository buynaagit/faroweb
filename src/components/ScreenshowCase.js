import React from "react";
import Sectitle from "./Title/Sectitle";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const ScreenshowCase = () => {
  return (
    <section className="app_screenshot_area sec_pad" id="showcase">
      <div className="container custom_container p0">
        <Sectitle
          sClass="sec_title text-center mb_70"
          Title="Companies"
          tClass="t_color3 mb_20"
          TitleP="Welcome to FARO"
        />
        <div className="app_screen_info">
          <Slider className="app_screenshot_slider" {...settings}>
            <div className="item">
              <div className="screenshot_img">
                <a href="http://www.vrlab.mn/" className="image-link">
                  <img src={require("../img/websites/VRLab.png")} alt="" />
                </a>
              </div>
            </div>
            <div className="item">
              <div className="screenshot_img">
                <a href="http://www.ifdschool.edu.mn/" className="image-link">
                  <img src={require("../img/websites/IFD.png")} alt="" />
                </a>
              </div>
            </div>
            <div className="item">
              <div className="screenshot_img">
                <a href="http://faro.edu.mn/" className="image-link">
                  <img src={require("../img/websites/FaroEDU.jpeg")} alt="" />
                </a>
              </div>
            </div>
            <div className="item">
              <div className="screenshot_img">
                <a
                  href="http://www.farofoundation.mn/mbilling/"
                  className="image-link"
                >
                  <img
                    src={require("../img/websites/FaroFoundation.jpeg")}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default ScreenshowCase;
