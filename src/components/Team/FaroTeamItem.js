import React, { Component } from "react";

class FaroTeamItem extends Component {
  render() {
    let { image, name, desc, item, index } = this.props;
    return (
      <div className="item">
        <div className="e_team_img">
          <img src={require("../../img/teams/" + image)} alt="" />
          <ul className="list-unstyled">
            {item.socialLinks.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.social_url}>
                    <i className={`${item.icon}`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <a href="/#">
          <h4>{name}</h4>
        </a>
        <p>{desc}</p>
      </div>
    );
  }
}

export default FaroTeamItem;
