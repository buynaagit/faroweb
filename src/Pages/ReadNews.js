import React from "react";
import SignInForm from "../components/SignInForm";
import OnepageMenu from "../components/OnepageMenu";
import AppBanner from "../components/Banner/AppBanner";
const ReadNews = () => {
  return (
    <div className="body_wrapper" style={{ backgroundColor: "grey" }}>
      <OnepageMenu
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu"
        hbtnClass="btn_get_radious menu_custfive"
      />
      {/* <AppBanner /> */}
    </div>
  );
};

export default ReadNews;