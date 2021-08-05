import React from "react";
import Reveal from "react-reveal";
const DownloadHippo = () => {
  return (
    <section className="get_started_area">
      <div className="shap one"></div>
      <div className="shap two"></div>
      <div className="shap one three"></div>
      <div className="shap two four"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <Reveal bottom cascade>
              <div className="get_content">
                <h3 className="f_400 f_p wow fadeInLeft" data-wow-delay="0.2s">
                  Faro technology solution.
                </h3>
                <h2
                  className="f_700 f_p f_size_40 l_height50 mb_20 wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  Download HIPPOCARDS
                </h2>
                <p
                  className="f_400 f_p mb_40 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  Powerful educational app for everyone. Learn new words in 7
                  language in most efficient way.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.hippocards&hl=en&gl=US"
                  className="app_btn app_btn_one wow fadeInLeft"
                  data-wow-delay="0.5s"
                >
                  <img src={require("../img/home7/google_icon.png")} alt="" />
                  Google Play
                </a>
                <a
                  href="https://apps.apple.com/us/app/hippocards/id1474192233"
                  className="app_btn app_btn_two wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <i className="fab fa-apple"></i>App Store
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-6 text-right">
            <Reveal effect="fadeInRight" duration={2200}>
              {" "}
              <img src={require("../img/home7/iPhoneX2.png")} alt="" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DownloadHippo;
