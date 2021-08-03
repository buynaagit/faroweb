import React from "react";
import Sectitle from "../Title/Sectitle";
import Teamitem from "../Team/Teamitem";
import Reveal from "react-reveal";
import TeamTitle from "../Title/TeamTitle";
const AppTeam = () => {
  return (
    <section className="experts_team_area sec_pad" id="team">
      <div className="container">
        <TeamTitle
          sClass="sec_title text-center mb_70"
          Title="The Experts Team"
          tClass="t_color3"
          TitleP="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot richard cheers the little rotter.!"
        />
        <Reveal bottom cascade>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <Teamitem
                teamImage="team_01.jpg"
                memberN="Ider-Od Bat-Erdene"
                memberd="Founder CEO"
              />
            </div>
            <div className="col-lg-3 col-sm-6">
              <Teamitem
                teamImage="team_02.jpg"
                memberN="Byambajargal Ayushjav"
                memberd="Founder CEO"
              />
            </div>
            <div className="col-lg-3 col-sm-6">
              <Teamitem
                teamImage="team_03.jpg"
                memberN="Amartungalag"
                memberd="CEO of Hippocards"
              />
            </div>
            <div className="col-lg-3 col-sm-6">
              <Teamitem
                teamImage="team_04.jpg"
                memberN="Bailey Wonger"
                memberd="Marketer"
              />
            </div>
            <div className="col-lg-12 text-center">
              <a href=".#" className="learn_btn">
                Meet All Team <i className="ti-arrow-right"></i>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
export default AppTeam;
