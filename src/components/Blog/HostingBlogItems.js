import React, { Component } from "react";

class HostingBlogItems extends Component {
  render() {
    let { blogImage, blogTitle, pDate, comments } = this.props;
    return (
      <div style={{ marginLeft: "100px", width: "500px" }}>
        <div className="h_blog_item">
          <a href="/#">
            <img
              src={require("../../img/hosting/" + blogImage)}
              alt="blog"
              style={{ width: "500", height: "200" }}
            />
          </a>
          <div className="h_blog_content">
            <a href="/#" className="post_time">
              <i className="icon_clock_alt"></i>
              {pDate}
            </a>
            <a href="/#">
              <h3>{blogTitle}</h3>
            </a>
            <div className="post-info-bottom">
              <a href="/#" className="learn_btn_two">
                Read More <i className="arrow_right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HostingBlogItems;
