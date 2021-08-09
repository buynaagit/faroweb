import React, { Component } from "react";

class Blogrightsidebar extends Component {
  render() {
    let ServiceData = this.props.ServiceData;
    return (
      <div className="blog-sidebar">
        <div className="widget sidebar_widget widget_recent_post mt_60">
          <div className="widget_title">
            <h3 className="f_p f_size_20 t_color3">Recent posts</h3>
            <div className="border_bottom"></div>
          </div>
          {ServiceData.rpost.map((post) => {
            return (
              <div className="media post_item" key={post.id}>
                <img src={require("../../img/" + post.image)} alt="" />
                <div className="media-body">
                  <a href=".#">
                    <h3 className="f_size_16 f_p f_400">{post.ptitle}</h3>
                  </a>
                  <div className="entry_post_info">
                    By: <a href=".#">{post.admin}</a>
                    <a href=".#">{post.date}</a>
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
            <a href=".#">Faro education</a>
            <a href=".#">Faro foundation</a>
            <a href=".#">VR Lab</a>
            <a href=".#">IFD</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Blogrightsidebar;
