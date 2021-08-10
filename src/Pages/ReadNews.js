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

class ReadNews extends Component {
  state = {
    loading: true,
    person: null,
    blog: ["", "", ""],
    date0: "",
    date1: "",
    date2: "",
  };

  async componentDidMount() {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ username: "admin", password: "admin1234" }),
    };
    const response = await fetch(`${URL}/api/latest-blogs/3/`, requestOptions);
    const data = await response.json();
    await this.setState({ blog: data });
    if (this.state.blog.length < 3) {
      console.log("No data");
    } else {
      const d0 = new Date(this.state.blog[0].createdAt);
      const d1 = new Date(this.state.blog[1].createdAt);
      const d2 = new Date(this.state.blog[2].createdAt);
      const date0 = `${d0.getDate()}/${d0.getMonth()}/${d0.getFullYear()}`;
      const date1 = `${d1.getDate()}/${d1.getMonth()}/${d1.getFullYear()}`;
      const date2 = `${d2.getDate()}/${d2.getMonth()}/${d2.getFullYear()}`;
      this.setState({ date0: date0 });
      this.setState({ date1: date1 });
      this.setState({ date2: date2 });
      console.log(this.state.blog);
    }
  }
  render() {
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
                    <img
                      className="img-fluid"
                      src={this.state.blog[1].cover_image}
                      alt=""
                    />
                    <div className="blog_content">
                      <div className="post_date">
                        <h2>
                          14 <span>March</span>
                        </h2>
                      </div>

                      <h5 className="f_p f_size_20 f_500 t_color mb-30">
                        ${this.state.blog[2].title}
                      </h5>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: this.state.blog[2].description,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <Blogrightsidebar ServiceData={ServiceData} />
                </div>
              </div>
            </div>
          </section>
        </div>
        <FooterTwo FooterData={FooterData}></FooterTwo>
      </div>
    );
  }
}

export default ReadNews;
