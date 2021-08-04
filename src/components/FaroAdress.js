import React from "react";
import Map from "./Map";
const FaroAdress = () => {
  return (
    <section className="event_location_area">
      <Map />
      <div className="container">
        <div className="event_location">
          <div className="contact_info_item">
            <h6>
              6 Чингисийн Өргөн Чөлөө, Khoroo 15, Khan Uul, Ulaanbaatar 17011
              Ulaanbaatar, Mongolia
            </h6>
            <p>Faro Group</p>
          </div>
          <div className="contact_info_item">
            <h6>Contact Info</h6>
            <p>
              <a href="mailto:saasland@gmail.com">faro@mail.com</a>
            </p>
            <p>
              <a href="tel:3024437488">(+0976) 11 22 33 44</a>
            </p>
          </div>
          <div className="f_social_icon_two">
            <a href="https://www.facebook.com/faroedu">
              <i className="ti-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FaroAdress;
