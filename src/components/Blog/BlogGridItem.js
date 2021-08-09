import React, { Component } from "react";

class BlogGridItem extends Component {
  render() {
    let { date, month, Title, description, btn, comment, image } = this.props;
    return (
      <div className="col-lg-6" style={{ maxWidth: "100%" }}>
        <div className="blog_list_item blog_list_item_two">
          <a href="./ReadNews" className="post_date">
            <h2>
              {date} <span>{month}</span>
            </h2>
          </a>
          <a href="./ReadNews">
            <img
              className="img-fluid"
              src={image}
              alt=""
              style={{ width: "370px", height: "300px" }}
            />
          </a>
          <div className="blog_content">
            <a href="./ReadNews">
              <h5
                className="blog_title"
                style={{
                  lineHeight: "1.5rem",
                  height: "3rem",
                  overflow: "hidden",
                }}
              >
                {Title}
              </h5>
            </a>
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              style={{
                lineHeight: "1.5rem",
                height: "3rem",
                overflow: "hidden",
              }}
            ></div>
            <div className="post-info-bottom">
              <a href="./ReadNews" className="learn_btn_two">
                {btn} <i className="arrow_right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BlogGridItem;
