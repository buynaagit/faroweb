import React, { Component } from "react";

class HostingBlogItems extends Component {
  render() {
    let { blogImage, blogTitle, pDate, comments } = this.props;
    return (
      <div
        style={{
          marginLeft: "50px",
          width: "500px",
          marginTop: "50px",
          marginRight: "50px",
        }}
      >
        <div className="h_blog_item">
          <a href="../ReadNews">
            <img src={blogImage} alt="blog" width="300px" height="300px" />
          </a>
          <div className="h_blog_content">
            <a href="../ReadNews" className="post_time">
              <i className="icon_clock_alt"></i>
              {pDate}
            </a>

            <a href="/#">
              <h3
                className="newsTitle"
                style={{ marginRight: "50px", width: "100%" }}
              >
                {blogTitle}
              </h3>
            </a>

            <div className="post-info-bottom">
              <a
                width=""
                href="../ReadNews"
                style={{
                  border: "2px solid grey",
                  borderRadius: "20px",
                  padding: "7px",
                }}
                className="learn_btn_two"
              >
                <h8 className="learn_btn_two">Дэлгэрэнгүй </h8>
                <i className="arrow_right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HostingBlogItems;
