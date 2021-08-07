import React, { Component } from "react";
import Sectitle from "../Title/Sectitle";
import ReadNews from "../../Pages/ReadNews";
import HostingBlogItems from "../Blog/HostingBlogItems";

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
      "https://far0.herokuapp.com/api/blogs/",
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
      const date0 = `${d0.getDate()}/${d0.getMonth()}/${d0.getFullYear()}`;
      const date1 = `${d1.getDate()}/${d1.getMonth()}/${d1.getFullYear()}`;
      const date2 = `${d2.getDate()}/${d2.getMonth()}/${d2.getFullYear()}`;
      this.setState({ date0: date0 });
      this.setState({ date1: date1 });
      this.setState({ date2: date2 });
    }
  }

  render() {
    console.log(">>>>>>", this.state.blog);
    return (
      <section className="h_blog_area sec_pad">
        <div style={{}}>
          <Sectitle
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
          </div>
        </div>
      </section>
    );
  }
}
export default News;
