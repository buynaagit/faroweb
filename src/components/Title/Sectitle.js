import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
class Sectitle extends Component {
  render() {
    var { Title, TitleP, tClass, sClass } = this.props;
    return (
      <div className={`${sClass}`}>
        <Reveal effect="fadeInUp" duration={1300}>
<<<<<<< HEAD
          <h2 className={`f_p f_size_30 l_height50 f_600 ${tClass}`}>News</h2>
=======
          <h2 className={`f_p f_size_30 l_height50 f_600 ${tClass}`}>
            {TitleP}
          </h2>
>>>>>>> 1183c8feb3c617da73cb9b9a7c4e10c9a6db0744
        </Reveal>
      </div>
    );
  }
}
export default Sectitle;
