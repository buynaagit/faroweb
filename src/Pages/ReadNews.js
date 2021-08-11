import React, { Component } from "react";
import SignInForm from "../components/SignInForm";
import AppBanner from "../components/Banner/AppBanner";
import Blogrightsidebar from "../components/Blog/Blogrightsidebar";
import ServiceData from "../components/Service/ServiceData";
import { URL } from "../utils/appConstant";
import FooterData from "../components/Footer/FooterData";
import { useEffect } from "react/cjs/react.production.min";
import FooterTwo from "../components/Footer/FooterTwo";
import OnepageMenuNews from "../components/OnePageMenuNews";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import ImgWithLoader from "../components/ImgWithLoader";

class ReadNews extends Component {
  state = {
    loading: true,
    person: null,
    blog: [],
    date0: "",
    date1: "",
    date2: "",
    recentPost: [],
    month: [
      ["Jan", "1р сар"],
      ["Feb", "2р сар"],
      ["Mar", "3р сар"],
      ["Apr", "4р сар"],
      ["May", "5р сар"],
      ["June", "6р сар"],
      ["July", "7р сар"],
      ["Aug", "8р сар"],
      ["Sep", "9р сар"],
      ["Oct", "10р сар"],
      ["Nov", "11р сар"],
      ["Dec", "12р сар"],
    ],
    date0: ["", ""],
    imgLoading: true,
  };

  async componentDidMount() {
    window.scrollTo(0, 0);

    // POST request using fetch with async/await
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `${URL}/api/blogs/${this.props.match.params.id}/`,
      requestOptions
    );
    const response2 = await fetch(
      `${URL}/api/recent-blogs/?exc_id=${this.props.match.params.id}`,
      requestOptions
    );
    const data2 = await response2.json();
    const data = await response.json();
    await this.setState({ blog: data, recentPost: data2 });
    console.log(this.state.recentPost);
    if (this.state.blog.length < 1) {
      console.log(`No Data2`);
    } else {
      const d0 = new Date(this.state.blog.createdAt);
      const date0 = [`${d0.getDate()}`, `${d0.getMonth()}`];
      this.setState({ date0: date0 });
    }
  }

  handleImageLoading() {
    console.log("dqwdqwdwqdwq");
    this.setState({ imgLoading: false });
  }

  render() {
    console.log(this.state.imgLoading);
    return (
      <div>
        <div style={{ color: "black" }}>
          <OnepageMenuNews
            slogo="sticky_logo"
            mClass="menu_four"
            nClass="w_menu"
            hbtnClass="btn_get_radious menu_custfive"
          />
        </div>
        <div className="body_wrapper">
          <section className="blog_area sec_pad">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 blog_sidebar_left">
                  <div className="blog_single mb_50">
                    <ImgWithLoader
                      imgUrl={this.state.blog.cover_image}
                      className="readnews-cover-img"
                    />
                    <div className="blog_content">
                      <div className="post_date">
                        <h2>
                          {this.state.date0[0] == ""
                            ? "0"
                            : this.state.date0[0]}
                          <span>
                            {this.state.date0[0] == ""
                              ? "0"
                              : this.state.month[this.state.date0[1]][0]}
                          </span>
                        </h2>
                      </div>

                      <h5 className="f_p f_size_20 f_500 t_color mb-30">
                        {this.state.blog.title}
                      </h5>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: this.state.blog.description,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <Blogrightsidebar ServiceData={this.state.recentPost} />
                </div>
              </div>
            </div>
          </section>
        </div>
        <FooterTwo FooterData={FooterData}></FooterTwo>
        {/* <div style={{ height: "1000vh" }}></div> */}
      </div>
    );
  }
}

export default ReadNews;
