import React from "react";
import Reveal from "react-reveal/Reveal";

const Quote = () => {
  return (
    <React.Fragment>
      <section className="payment_testimonial_area">
        <div className="container">
          <div className="row payment_testimonial_info flex-row-reverse">
            <div className="col-lg-7 d-flex align-items-center">
              <div className="testimonial_content">
                <div className="icon">,,</div>
                <p className="f_p f_size_20">
                  “Ийм хүмүүсийн карьер сайн явдаг:‬ Хэлснээс илүүг хийдэг‬.
                  ‪Асуухаасаа өмнө өөрөө нухдаг.‬ Түрүүлж залгадаг‬,Ойлгомжтой,
                  товч ярьж чаддаг‬. Хоцорсон ч, суугаад дуусгадаг‬. Ядаж ганц
                  үндсэн чадвартай‬. Шийдэл олдог, гацаад хаядаггүй‬. Цалингаас
                  цаадахад итгэл үнэмшилтэй‬”
                </p>
                <div className="author f_600 f_p t_color f_size_20">
                  Ider-Od Bat-Erdene
                </div>
                <div className="author_description f_p f_size_15">
                  CEO and Founder
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="testimonial_img">
                <img
                  src={require("../../img/home9/testimonial_img.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Quote;
