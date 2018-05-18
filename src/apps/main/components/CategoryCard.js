/* @flow */
import React from "react";
// import { Link } from "react-router";
import { Icon } from "react-foundation";

type Props = {
  cat: string,
};

export default class CategoryCard extends React.PureComponent {
  props: Props;
  render() {
    const { cat } = this.props;
    return (
      <a href="#" className="cell medium-3 margin-bottom-2" key={cat}>
        <span>
          <img src="https://images.pexels.com/photos/163704/bike-old-wheel-two-wheeled-vehicle-163704.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
          <span className="image-hover-wrapper-banner h5">
            <b>{cat}</b>
          </span>{" "}
          <div className="subheader">Whiskey, Wine, Cheese</div>
          <div className="h6">
            <Icon prefix="fi" name="star" />
            <Icon prefix="fi" name="star" />
            <Icon prefix="fi" name="star" />
            <Icon prefix="fi" name="star" />
            <Icon prefix="fi" name="star" />
            <small> 120</small>
          </div>
        </span>
      </a>
    );
  }
}
