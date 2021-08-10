import React, { Component } from "react";
import Sectitle from "../Title/Sectitle";
import ReadNews from "../../Pages/ReadNews";
import HostingBlogItems from "../../components/Blog/HostingBlogItems";
import Blogrightsidebar from "../../components/Blog/Blogrightsidebar";
import BlogGridItem from "../../components/Blog/BlogGridItem";
import ServiceData from "../Service/ServiceData";
import { WindowsFilled } from "@ant-design/icons";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

class News extends Component {
  state = {
    loading: true,
    person: null,
    blog: ["", "", ""],
    date0: ["", ""],
    date1: ["", ""],
    date2: ["", ""],
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
    if (this.state.blog.length < 3) {
      console.log("No data");
    } else {
      const d0 = new Date(this.state.blog[0].createdAt);
      const d1 = new Date(this.state.blog[1].createdAt);
      const d2 = new Date(this.state.blog[2].createdAt);
      const date0 = [`${d0.getDate()}`, `${d0.getMonth()}`];
      const date1 = [`${d1.getDate()}`, `${d1.getMonth()}`];
      const date2 = [`${d2.getDate()}`, `${d2.getMonth()}`];
      this.setState({ date0: date0 });
      this.setState({ date1: date1 });
      this.setState({ date2: date2 });
    }

    // React.useEffect(() => {
    //   window.scrollTo(0, 0);
    // });
  }

  render() {
    return (
      <section className="h_blog_area sec_pad">
        <section className="blog_area_two sec_pad">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-8 blog_grid_info"
                style={{ flex: "100%", maxWidth: "100%" }}
              >
                <div className="row faroNews">
                  <BlogGridItem
                    date={this.state.date0[0] == "" ? "0" : this.state.date0[0]}
                    month={
                      this.state.date0[0] == ""
                        ? "0"
                        : this.state.month[this.state.date0[1]][0]
                    }
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
                    id={
                      this.state.blog.length < 3
                        ? require("../../img/faro.png")
                        : this.state.blog[0].id
                    }
                  />
                  <BlogGridItem
                    date={this.state.date1[0] == "" ? "0" : this.state.date1[0]}
                    month={
                      this.state.date1[0] == ""
                        ? "0"
                        : this.state.month[this.state.date1[1]][0]
                    }
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
                    id={
                      this.state.blog.length < 3
                        ? require("../../img/faro.png")
                        : this.state.blog[1].id
                    }
                  />
                  <BlogGridItem
                    date={this.state.date2[0] == "" ? "0" : this.state.date2[0]}
                    month={
                      this.state.date2[0] == ""
                        ? "0"
                        : this.state.month[this.state.date2[1]][0]
                    }
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
                    id={
                      this.state.blog.length < 3
                        ? require("../../img/faro.png")
                        : this.state.blog[2].id
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
export default News;
