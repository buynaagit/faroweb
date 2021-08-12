import React from "react";
import Reveal from "react-reveal";
import { getLocale } from "../../locales";
import light from "../../img/home9/light.png";


const AppBanner = () => {
  
  return (
    <section className="app_banner_area" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Reveal bottom cascade>
              <div className="app_banner_contentmt mt_40">
                <h2
                  className="f_p f_size_70 w_color mb_20 wow fadeInLeft"
                  data-wow-delay="0.2s"
                  
                >
                   { getLocale("AppBanner1.1") } <br/>{ getLocale("AppBanner1.2") }<br/> { getLocale("AppBanner1.3") }
                  <br />
                </h2>
                <p
                  className="f_400 f_size_18 l_height30 w_color wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  THE LIGHT TOWER FOR THE FUTURE
                </p>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-6 light-house" >
              <div className="app_img">
              {/* <img
                className="app_screen one wow fadeInDown"
                src={require("../../img/home7/light-tower.png")}
                alt=""
              /> 
               <img
                className="app_screen two wow fadeInDown"
                src={require("../../img/home7/03.png")}
                alt=""
              />
              <img
                className="app_screen three wow fadeInDown"
                src={require("../../img/home7/02.png")}
                alt=""
              /> */}
              <div className="light-house-back"/>
              <img
                src={require("../../img/home7/light-tower.png")}
                alt=""
              /><div className="box">
                  <img src={light} className="light" />
                </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AppBanner;
