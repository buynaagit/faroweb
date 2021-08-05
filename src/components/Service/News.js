import React, { Component } from "react";
import Sectitle from "../Title/Sectitle";
import ReadNews from "../../Pages/ReadNews";
import HostingBlogItems from "../Blog/HostingBlogItems";

class News extends Component {
  state = {
    loading: true,
    person: null,
    blog: ["", "", ""],
  };

  async componentDidMount() {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ username: "admin", password: "admin1234" }),
    };
    const response = await fetch(
      "http://192.168.0.119:8000/api/blogs/",
      requestOptions
    );
    const data = await response.json();
    // console.log(">>>>>>>>", data);
    await this.setState({ blog: data });
    console.log(this.state.blog);
  }

  render() {
    console.log(">>>>>>", this.state.blog);
    let ServiceData = this.props.ServiceData;
    return (
      // <section className="app_service_area" id="work">
      //   <div className="container">
      //     <Sectitle
      //       sClass="sec_title text-center mb_70"
      //       Title="Мэдээ, мэдээллүүд"
      //       tClass="t_color3"
      //       TitleP="Шинэ мэдээ, мэдээллүүд"
      //     />
      //     <div className="row app_service_info">
      //       {ServiceData.work.map((items) => {
      //         return (
      //           <div className="col-lg-4" key={items.id}>
      //             <div
      //               className="app_service_item wow fadeInUp"
      //               data-wow-delay="0.2s"
      //             >
      //               {/* <i className={`app_icon ${items.icon}`}></i> */}
      //               <img
      //                 src={require(`../../img/${items.image}`)}
      //                 alt=""
      //                 style={{
      //                   paddingLeft: 0,
      //                   paddingRight: 0,
      //                   width: "100%",
      //                   height: "200px",
      //                 }}
      //               />

      //               <h5
      //                 className="f_p f_size_18 f_600 t_color3 mt_40 mb-30"
      //                 style={{ padding: "5px", paddingLeft: 20 }}
      //               >
      //                 {items.title}
      //               </h5>

      //               {items.p.length < 20 ? (
      //                 <p
      //                   className="f_400 f_size_15 mb-30"
      //                   style={{ padding: "5px", paddingLeft: 20 }}
      //                 >
      //                   {items.p}{" "}
      //                 </p>
      //               ) : (
      //                 <p
      //                   className="f_400 f_size_15 mb-30"
      //                   style={{ padding: "5px", paddingLeft: 20 }}
      //                 >
      //                   {items.p.slice(0, 150)}
      //                   {" ..."}
      //                 </p>
      //               )}

      //               <a
      //                 style={{
      //                   padding: "5px",
      //                   paddingLeft: 20,
      //                   paddingBottom: 50,
      //                   alignSelf: "flex-end",
      //                 }}
      //                 href=".#"
      //                 className="learn_btn_two"
      //               >
      //                 Дэлгэрэнгүй
      //                 <i
      //                   className="ti-arrow-right"
      //                   style={{
      //                     padding: "5px",
      //                     paddingLeft: 20,
      //                     alignSelf: "flex-end",
      //                   }}
      //                 ></i>
      //               </a>
      //             </div>
      //           </div>
      //         );
      //       })}
      //     </div>
      //   </div>

      // </section>
      <section className="h_blog_area sec_pad">
        <div>
          <Sectitle
            Title="Our Latest News"
            TitleP="Шинэ мэдээ, мэдээлэл"
            sClass="hosting_title text-center"
          />
          <div className="row">
            <HostingBlogItems
              blogImage="h_blog2.jpg"
              blogTitle={this.state.blog[0].title}
              pDate={this.state.blog[0].createdAt}
            />
            <HostingBlogItems
              blogImage="h_blog2.jpg"
              blogTitle={this.state.blog[1].title}
              pDate={this.state.blog[1].createdAt}
            />
            <HostingBlogItems
              blogImage="h_blog2.jpg"
              blogTitle={this.state.blog[2].title}
              pDate={this.state.blog[2].createdAt}
            />
          </div>
        </div>
      </section>
    );
  }
}
export default News;
