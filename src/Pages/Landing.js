import React from "react";
import OnepageMenu from "../components/OnepageMenu";
import AppBanner from "../components/Banner/AppBanner";
import News from "../components/Service/News";
import AppGetstarted from "../components/AppGetstarted";
import FooterTwo from "../components/Footer/FooterTwo";
import ServiceData from "../components/Service/ServiceData";
import FooterData from "../components/Footer/FooterData";
import FaroTeam from "../components/Team/FaroTeam";
import FaroAdress from "../components/FaroAdress";
import FaroWebsites from "../components/FaroWebsites";
import Career from "../components/Features/Career";
import CorporateInfo from "../components/Features/CorporateInfo";
import Quote from "../components/Testimonial/Quote";
import FaroService from "../components/Service/FaroService";
import Erpanalytics from "../components/Erpanalytics";
import SecurityFeatures from "../components/Features/SecurityFeatures";
import ErpService from "../components/Service/ErpService";

const Landing = () => {
  return (
    <div className="body_wrapper">
      <OnepageMenu
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu"
        hbtnClass="btn_get_radious menu_custfive"
      />
      <AppBanner />
      <FaroWebsites />
      <CorporateInfo />
      <News ServiceData={ServiceData} />
      <FaroTeam />
      <Quote />
      <SecurityFeatures />
      <ErpService />
      <Career />
      <FaroAdress />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default Landing;
