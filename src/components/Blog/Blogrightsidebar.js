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
  async componentDidMount() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`${URL}/api/blogs/`, requestOptions);
    const data = await response.json();
    await this.setState({ blog: data });
    // if (this.state.blog.length < 1) {
    //   console.log(`No Data`);
    // } else {
    //   const d0 = new Date(this.state.blog.createdAt);
    //   const date0 = `${d0.getDate()}/${d0.getMonth()}/${d0.getFullYear()}`;
    //   this.setState({ date0: date0 });
    //   console.log(this.state.blog);
    // }
  }
  render() {
    let ServiceData = this.props.ServiceData;
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
                  <a href=".#">
                    <h3 className="f_size_16 f_p f_400">{post.title}</h3>
                  </a>
                  <div className="entry_post_info">
                    <a href=".#">2021-07-09</a>
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
              style={{
                backgroundColor: "#5e2ced",
                borderColor: "#5e2ced",
                color: "#fff",
              }}
            >
              Faro education
            </a>
            <a name="faro2">Faro foundation</a>
            <a name="faro3">VR Lab</a>
            <a name="faro4">IFD</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Blogrightsidebar;
