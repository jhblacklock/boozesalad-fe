/* @flow */
import React from "react";
import { Link } from "react-router";
import { Icon } from "react-foundation";

type Props = {
  name: string,
};

export default class UserCard extends React.PureComponent {
  props: Props;
  render() {
    const { name } = this.props;
    return (
      <Link to="william" className="cell medium-3 margin-bottom-2" key={name}>
        <span>
          <img src="https://images.pexels.com/photos/163704/bike-old-wheel-two-wheeled-vehicle-163704.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
          <span className="h5">
            <b>{name}</b>
          </span>
          <div className="text-uppercase">
            <small>Whiskey, Wine, Cheese</small>
          </div>
          <div className="h6">
            <Icon prefix="fi" name="star" />
            <Icon prefix="fi" name="star" />
            <Icon prefix="fi" name="star" />
            <Icon prefix="fi" name="star" />
            <Icon prefix="fi" name="star" />
            <small> 120</small>
          </div>
        </span>
      </Link>
    );
  }
}
