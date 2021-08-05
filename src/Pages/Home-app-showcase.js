import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import AppBanner from "../components/Banner/AppBanner";
import AppFeaturesTwo from "../components/Features/CorporateInfo";
import AppFeatures from "../components/Features/Career";
import AppTestimonial from "../components/Testimonial/AppTestimonial";
import News from "../components/Service/News";
import ScreenshowCase from "../components/FaroWebsites";
import AppGetstarted from "../components/AppGetstarted";
import AppTeam from "../components/Team/AppTeam";
import FooterTwo from "../components/Footer/FooterTwo";
import ServiceData from "../components/Service/ServiceData";
import FooterData from "../components/Footer/FooterData";

const HomeAppShowcase = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu"
        hbtnClass="er_btn"
      />
      <AppBanner />
      <AppFeaturesTwo />
      <AppFeatures />
      <News ServiceData={ServiceData} />
      <AppTestimonial />
      <ScreenshowCase />
      <AppGetstarted />
      <AppTeam />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default HomeAppShowcase;
