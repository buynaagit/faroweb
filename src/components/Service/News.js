import React, { Component } from "react";
import Sectitle from "../Title/Sectitle";

class News extends Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0] });
    this.setState({ loading: false });
    console.log(">>>>>>>>>>>>>>", data);
  }

  render() {
    let ServiceData = this.props.ServiceData;
    return (
      <section className="app_service_area" id="work">
        <div className="container">
          <Sectitle
            sClass="sec_title text-center mb_70"
            Title="Мэдээ, мэдээллүүд"
            tClass="t_color3"
            TitleP="Шинэ мэдээ, мэдээллүүд"
          />
          <div className="row app_service_info">
            {ServiceData.work.map((items) => {
              return (
                <div className="col-lg-4" id="news" key={items.id}>
                  <div
                    className="app_service_item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    {/* <i className={`app_icon ${items.icon}`}></i> */}
                    <img
                      src={require(`../../img/${items.image}`)}
                      alt=""
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        width: "100%",
                        height: "200px",
                      }}
                    />

                    <h5
                      className="f_p f_size_18 f_600 t_color3 mt_40 mb-30"
                      style={{ padding: "5px", paddingLeft: 20 }}
                    >
                      {items.title}
                    </h5>

                    {items.p.length < 20 ? (
                      <p
                        className="f_400 f_size_15 mb-30"
                        style={{ padding: "5px", paddingLeft: 20 }}
                      >
                        {items.p}{" "}
                      </p>
                    ) : (
                      <p
                        className="f_400 f_size_15 mb-30"
                        style={{ padding: "5px", paddingLeft: 20 }}
                      >
                        {items.p.slice(0, 150)}
                        {" ..."}
                      </p>
                    )}

                    <a
                      style={{
                        padding: "5px",
                        paddingLeft: 20,
                        paddingBottom: 50,
                        alignSelf: "flex-end",
                      }}
                      href=".#"
                      className="learn_btn_two"
                    >
                      Дэлгэрэнгүй
                      <i
                        className="ti-arrow-right"
                        style={{
                          padding: "5px",
                          paddingLeft: 20,
                          alignSelf: "flex-end",
                        }}
                      ></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default News;
