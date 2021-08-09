import React, { Component } from "react";
import SignInForm from "../components/SignInForm";
import OnepageMenu from "../components/OnepageMenu";
import AppBanner from "../components/Banner/AppBanner";
import Blogrightsidebar from "../components/Blog/Blogrightsidebar";
import ServiceData from "../components/Service/ServiceData";
import { URL } from "../utils/appConstant";
import { useEffect } from "react/cjs/react.production.min";

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
        <div className="body_wrapper" style={{ color: "black" }}>
          <OnepageMenu
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
                      src={require("../../src/img/blog-grid/blog_list1.jpg")}
                      alt=""
                    />
                    <div className="blog_content">
                      <div className="post_date">
                        <h2>
                          14 <span>March</span>
                        </h2>
                      </div>

                      <a href=".#">
                        <h5 className="f_p f_size_20 f_500 t_color mb-30">
                          Bloke cracking goal the full monty get stuffed mate
                          posh.
                        </h5>
                      </a>
                      <p
                        className="f_400 mb-30"
                        dangerouslySetInnerHTML={{
                          __html: this.state.blog[0].description,
                        }}
                        style={{
                          lineHeight: "1.5rem",
                          height: "3rem",
                          overflow: "hidden",
                        }}
                      ></p>
                      <p className="f_400 mb_40">
                        Cras mush pardon you knees up he lost his bottle it's
                        all gone to pot faff about porkies arse, barney
                        argy-bargy cracking goal loo cheers spend a penny bugger
                        all mate in my flat, hunky-dory well get stuffed mate
                        David morish bender lavatory. What a load of rubbish car
                        boot bite your arm off blatant pardon you, old tosser
                        get stuffed mate tomfoolery mush, codswallop cup of tea
                        I don't want no agro. Off his nut show off show off pick
                        your nose and blow.!
                      </p>
                      <blockquote className="blockquote mb_40">
                        <h6 className="mb-0 f_size_18 l_height30 f_p f_400">
                          Elizabeth ummm I'm telling bodge spend a penny say
                          wellies say James Bond, bubble and squeak a such a
                          fibber you mug quaint cack what.!
                        </h6>
                      </blockquote>
                      <p className="f_400 mb-30">
                        Bloke cracking goal the full monty get stuffed mate posh
                        wellies fantastic knackered tickety-boo Harry porkies,
                        mush excuse my French bender down the pub Oxford bum bag
                        gutted mate car boot pukka loo it's your round, cor
                        blimey guvnor is on your bike mate cup of char some
                        dodgy chav blag happy days nancy boy hotpot.
                      </p>
                      <p className="f_400 mb-30">
                        Cras chinwag brown bread Eaton cracking goal so I said a
                        load of old tosh baking cakes, geeza arse it's your
                        round grub sloshed burke, my good sir chancer he legged
                        it he lost his bottle pear shaped bugger all mate.
                        Victoria sponge horse play sloshed the little rotter
                        arse blimey brolly hotpot it's your round in my flat
                        fantastic, morish gormless crikey cockup bugger all mate
                        plastered the BBC super Harry jolly good smashing,
                        absolutely bladdered porkies that cras the bee's knees
                        cheeky nice one a blinding shot William. Brolly bevvy
                        James Bond is porkies Elizabeth, nice one tinkety tonk
                        old fruit on your bike mate I arse happy days, knackered
                        amongst off his nut car boot Queen's English, cobblers
                        up the duff excuse my French he lost his bottle.
                      </p>
                    </div>
                  </div>
                  <div className="blog_post">
                    <div className="widget_title">
                      <h3 className="f_p f_size_20 t_color3">Related Post</h3>
                      <div className="border_bottom"></div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-sm-6">
                        <div className="blog_post_item">
                          <div className="blog_img">
                            <img
                              src={require("../../src/img/blog-grid/blog_list1.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="blog_content">
                            <div className="entry_post_info">
                              <a href=".#">March 14, 2018</a>
                            </div>
                            <a href=".#">
                              <h5 className="f_p f_size_16 f_500 t_color">
                                Why I say old chap that.
                              </h5>
                            </a>
                            <p className="f_400 mb-0">
                              Harry bits and bleeding crikey argy-bargy...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="blog_post_item">
                          <div className="blog_img">
                            <img
                              src={require("../../src/img/blog-grid/blog_list1.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="blog_content">
                            <div className="entry_post_info">
                              <a href=".#">April 14, 2017</a>
                            </div>
                            <a href=".#">
                              <h5 className="f_p f_size_16 f_500 t_color">
                                Bloke cracking goal the.
                              </h5>
                            </a>
                            <p className="f_400 mb-0">
                              Harry bits and bleeding crikey argy-bargy...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="blog_post_item">
                          <div className="blog_img">
                            <img
                              src={require("../../src/img/blog-grid/blog_list1.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="blog_content">
                            <div className="entry_post_info">
                              <a href=".#">March 15, 2016</a>
                            </div>
                            <a href=".#">
                              <h5 className="f_p f_size_16 f_500 t_color">
                                Oxford james bond.
                              </h5>
                            </a>
                            <p className="f_400 mb-0">
                              Harry bits and bleeding crikey argy-bargy...
                            </p>
                          </div>
                        </div>
                      </div>
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
      </div>
    );
  }
}

export default ReadNews;
