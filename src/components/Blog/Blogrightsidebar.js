import React, { Component } from "react";
import { URL } from "../../utils/appConstant";

class Blogrightsidebar extends Component {
  state = {
    loading: true,
    person: null,
    blog: ["", "", ""],
    date0: "",
    date1: "",
    date2: "",
  };
  render() {
    let ServiceData = this.props.ServiceData;
    console.log(this.props);
    return (
      <div className="blog-sidebar">
        <div className="widget sidebar_widget widget_recent_post mt_60">
          <div className="widget_title">
            <h3 className="f_p f_size_20 t_color3">Recent posts</h3>
            <div className="border_bottom"></div>
          </div>
          {ServiceData.map((post) => {
            return (
              <div className="media post_item" key={post.id}>
                <img src={post.cover_image} alt="" width="90px" height="80px" />
                <div className="media-body">
                  <a href={`/ReadNews/${post.id}`}>
                    <h3 className="f_size_16 f_p f_400">{post.title}</h3>
                  </a>
                  <div className="entry_post_info">
                    <a href={`/ReadNews/${post.id}`}>
                      {ServiceData == ""
                        ? ""
                        : ServiceData[0].createdAt.slice(0, 10)}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="widget sidebar_widget widget_tag_cloud mt_60">
          <div className="widget_title">
            <h3 className="f_p f_size_20 t_color3">Tags</h3>
            <div className="border_bottom"></div>
          </div>
          <div className="post-tags">
            <a
              name="faro1"
              style={this.props.tag=="FARO"? {
                backgroundColor: "#3087e9",
                borderColor: "#3087e9",
                color: "#fff",
              }: null}
            >
              Faro education
            </a>
            <a name="faro2" style={this.props.tag=="IFD"? {
                backgroundColor: "#3087e9",
                borderColor: "#3087e9",
                color: "#fff",
              }: null}>Faro foundation</a>
            <a name="faro3" style={this.props.tag=="VRLAB"? {
                backgroundColor: "#3087e9",
                borderColor: "#3087e9",
                color: "#fff",
              }: null}>VR Lab</a>
            <a name="faro4" style={this.props.tag=="FOUNDATION"? {
                backgroundColor: "#3087e9",
                borderColor: "#3087e9",
                color: "#fff",
              }: null}>IFD</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Blogrightsidebar;
