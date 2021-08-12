import React from "react";
import SecurityFeaturesItem from "./SecurityFeaturesItem";
import { getLocale } from "../../locales";
const Features = () => {
  return (
    <section className="h_security_area">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            <span>{ getLocale("SecurityFeatures1") }</span>
          </h2>
        </div>
        <div className="row">
          <SecurityFeaturesItem
            itemClass="pr_70"
            image="security_1.png"
            Title={getLocale("SecurityFeatures1.1")}
            pText={getLocale("SecurityFeatures1.2")}
          />
          <SecurityFeaturesItem
            itemClass="pl_70"
            image="security_2.png"
            Title={getLocale("SecurityFeatures2.1")}
            pText={getLocale("SecurityFeatures2.2")}
          />
          <SecurityFeaturesItem
            itemClass="pr_70"
            image="security_3.png"
            Title={getLocale("SecurityFeatures3.1")}
            pText={getLocale("SecurityFeatures3.2")}
          />
          <SecurityFeaturesItem
            itemClass="pl_70"
            image="security_4.png"
            Title={getLocale("SecurityFeatures4.1")}
            pText={getLocale("SecurityFeatures4.2")}
          />
        </div>
      </div>
    </section>
  );
};
export default Features;
