import React from "react";
import Reveal from "react-reveal";
import Contacts from "../Contacts";
import { getLocale } from "../../locales";

const Career = () => {
  return (
    <section className="app_featured_area_two">
      <div className="triangle_shape"></div>
      <div className="container">
        <div className="row app_feature_info">
          <div className="col-lg-5"></div>
          <Reveal bottom cascade>
            <div className="app_featured_content">
              <h2 className="f_p f_size_30 f_700 t_color3 l_height45 mb-30">
                { getLocale("Career1") }
              </h2>
              <Contacts />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
export default Career;
