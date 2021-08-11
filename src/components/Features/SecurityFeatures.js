import React from "react";
import SecurityFeaturesItem from "./SecurityFeaturesItem";

const Features = () => {
  return (
    <section className="h_security_area">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            <span>Биднийг сонгох шалтгаан</span>
          </h2>
        </div>
        <div className="row">
          <SecurityFeaturesItem
            itemClass="pr_70"
            image="security_1.png"
            Title="Шүүмжлэлт сэтгэлгээ"
            pText="Виртуал Реалити технологи болон тухайн хүрээлэн буй орчинг зохион бүтээхэд тулгарах бэрхшээл, асуудлуудыг шийдвэрлэх замаар оюутан залуус болон мэргэжилтнүүд шүүмжлэлт сэтгэлгээгээ хөгжүүлэх юм."
          />
          <SecurityFeaturesItem
            itemClass="pl_70"
            image="security_2.png"
            Title="Асуудал шийдвэрлэх"
            pText="Оюутнууд болон мэргэжилтнүүд асуудлыг өөр өөр өнцгөөс дүгнэж шийдвэрлэх ба нэг ижил асуудал, даалгаврыг шийдвэрлэх олон төрлийн арга зам болон шийдлүүдэд хүрэх юм."
          />
          <SecurityFeaturesItem
            itemClass="pr_70"
            image="security_3.png"
            Title="Бүтээлч байдал"
            pText="Виртуал бодит орчинг зохион бүтээх нь оюутан залуус болон мэргэжилтнүүдэд өөрсдийн санаа бодол, урам зоригийг чөлөөтэй илэрхийлэх чадварыг олгон бүтээлч байдлыг нэмэгдүүлнэ."
          />
          <SecurityFeaturesItem
            itemClass="pl_70"
            image="security_4.png"
            Title="Хамтын ажиллагаа"
            pText="Виртуал бодит орчинг шинээр бий болгоход бүхэл бүтэн баг инженерүүдийн хөдөлмөр, хүчин чармайлтыг шаарддаг. Тиймээс Виртуал бодит байдлыг сурч хөгжүүлэхэд багийн хамтын ажиллагаа нэн чухал."
          />
        </div>
      </div>
    </section>
  );
};
export default Features;
