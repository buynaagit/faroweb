import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
class Sectitle extends Component {
  render() {
    var { Title, TitleP, tClass, sClass } = this.props;
    return (
      <div className={`${sClass}`}>
        <Reveal effect="fadeInUp" duration={1300}>
          <h2 className={`f_p f_size_30 l_height50 f_600 ${tClass}`}>
            {TitleP}
          </h2>
        </Reveal>
      </div>
    );
  }
}
export default Sectitle;
