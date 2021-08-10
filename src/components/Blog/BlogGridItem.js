import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class BlogGridItem extends Component {
  render() {
    let { date, month, Title, description, btn, comment, image, id } =
      this.props;
    return (
      <div className="col-lg-6" style={{ maxWidth: "100%" }}>
        <div className="blog_list_item blog_list_item_two">
          <Link to={`/ReadNews/${id}`} className="post_date">
            <h2>
              {date} <span>{month}</span>
            </h2>
          </Link>
          <Link to={`/ReadNews/${id}`}>
            <img
              className="img-fluid"
              src={image}
              alt=""
              style={{ width: "370px", height: "300px" }}
            />
          </Link>
          <div className="blog_content">
            <Link to={`/ReadNews/${id}`}>
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
            </Link>
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              style={{
                lineHeight: "1.5rem",
                height: "3rem",
                overflow: "hidden",
              }}
            ></div>
            <div className="post-info-bottom">
              <Link to={`/ReadNews/${id}`} className="learn_btn_two">
                {btn} <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BlogGridItem;
