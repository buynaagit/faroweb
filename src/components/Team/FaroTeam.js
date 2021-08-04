import React, { Component } from "react";
import FaroTeamItem from "./FaroTeamItem";
import Slider from "react-slick";
import { newData } from "../Footer/FooterData";

class FaroTeam extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <section className="event_team_area sec_pad">
        <div className="container">
          <div className="hosting_title security_title text-center">
            <h2 className="wow fadeInUp" data-wow-delay="0.2s">
              <span>Management</span>
            </h2>
          </div>

          <Slider
            ref={(c) => (this.slider = c)}
            className="event_team_slider"
            {...settings}
          >
            {newData.map((item, index) => {
              return (
                <FaroTeamItem
                  item={item}
                  image={item.image}
                  name={item.name}
                  desc={item.desc}
                />
              );
            })}
          </Slider>
        </div>
      </section>
    );
  }
}

export default FaroTeam;