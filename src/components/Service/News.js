import React, { Component } from "react";
import Sectitle from "../Title/Sectitle";
import ReadNews from "../../Pages/ReadNews";
import HostingBlogItems from "../../components/Blog/HostingBlogItems";
import Blogrightsidebar from "../../components/Blog/Blogrightsidebar";
import BlogGridItem from "../../components/Blog/BlogGridItem";
import ServiceData from "../Service/ServiceData";

class News extends Component {
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
    const response = await fetch(
      "https://far0.herokuapp.com/api/latest-blogs/3/",
      requestOptions
    );
    const data = await response.json();
    await this.setState({ blog: data });
    console.log(this.state.blog);
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
    }
  }

  render() {
    return (
      <section className="h_blog_area sec_pad">
        {/* <Sectitle
          Title="Our Latest News"
          TitleP="Шинэ мэдээ, мэдээлэл"
          sClass="hosting_title text-center"
        />
        <div className="row" style={{ justifyContent: "center" }}>
          <HostingBlogItems
            blogImage={
              this.state.blog.length < 3
                ? require("../../img/faro.png")
                : this.state.blog[0].cover_image
            }
            blogTitle={
              this.state.blog.length < 3 ? "test1" : this.state.blog[1].title
            }
            pDate={
              this.state.date1 == undefined ? "12345678" : this.state.date0
            }
          />
          <HostingBlogItems
            // blogImage={this.state.blog[1].cover_image == '' ? }
            blogImage={
              this.state.blog.length < 3
                ? require("../../img/faro.png")
                : this.state.blog[1].cover_image
            }
            blogTitle={
              this.state.blog.length < 3 ? "test1" : this.state.blog[1].title
            }
            pDate={
              this.state.date1 == undefined ? "12345678" : this.state.date1
            }
            x
          />
          <HostingBlogItems
            blogImage={
              this.state.blog.length < 3
                ? require("../../img/faro.png")
                : this.state.blog[2].cover_image
            }
            blogTitle={
              this.state.blog.length < 3 ? "test1" : this.state.blog[2].title
            }
            pDate={
              this.state.date2 == undefined ? "12345678" : this.state.date2
            }
          />
        </div> */}
        <section className="blog_area_two sec_pad">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-8 blog_grid_info"
                style={{ flex: "100%", maxWidth: "100%" }}
              >
                <div className="row faroNews">
                  <BlogGridItem
                    date="14"
                    month="jan"
                    image={
                      this.state.blog.length < 3
                        ? require("../../img/faro.png")
                        : this.state.blog[0].cover_image
                    }
                    Title={
                      this.state.blog.length < 3
                        ? "test1"
                        : this.state.blog[0].title
                    }
                    description={
                      this.state.blog.length < 3
                        ? require("../../img/faro.png")
                        : this.state.blog[0].description
                    }
                    btn="Read More"
                    comment="3"
                  />
                  <BlogGridItem
                    date="15"
                    month="Apr"
                    image={
                      this.state.blog.length < 3
                        ? require("../../img/faro.png")
                        : this.state.blog[1].cover_image
                    }
                    Title={
                      this.state.blog.length < 3
                        ? "test1"
                        : this.state.blog[1].title
                    }
                    description={
                      this.state.blog.length < 3
                        ? require("../../img/faro.png")
                        : this.state.blog[1].description
                    }
                    btn="Read More"
                    comment="2"
                  />
                  <BlogGridItem
                    date="10"
                    month="jan"
                    image={
                      this.state.blog.length < 3
                        ? require("../../img/faro.png")
                        : this.state.blog[2].cover_image
                    }
                    Title={
                      this.state.blog.length < 3
                        ? "test1"
                        : this.state.blog[2].title
                    }
                    description={
                      this.state.blog.length < 3
                        ? require("../../img/faro.png")
                        : this.state.blog[2].description
                    }
                    btn="Read More"
                    comment="3"
                  />
                </div>
                {/* <ul className="list-unstyled page-numbers shop_page_number text-left mt_30">
                  <li>
                    <span aria-current="page" className="page-numbers current">
                      1
                    </span>
                  </li>
                  <li>
                    <a className="page-numbers" href=".#">
                      2
                    </a>
                  </li>
                  <li>
                    <a className="next page-numbers" href=".#">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
              {/* <div className="col-lg-4">
                <Blogrightsidebar ServiceData={ServiceData} />
              </div> */}
            </div>
          </div>
        </section>
      </section>
    );
  }
}
export default News;
