/* @flow */
import React from "react";

export default class UserCard extends React.PureComponent {
  render() {
    return (
      <div className="card">
        <img src="https://unsplash.it/201/?random" />
        <div className="card-section">
          <b>Jackson Blacklock</b>
          <p>
            Your Portfolio is incomplete! Put your best foot forward by filling
            in the missing pieces.
          </p>
        </div>
      </div>
    );
  }
}
