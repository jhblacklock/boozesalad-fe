/* @flow */

import React, { Component } from "react";
import { Link } from "react-router";

export default class Join extends Component {
  render() {
    return (
      <div>
        <div className="width-100 text-center">
          <h1 className="separator-center">
            What can Taste Buddha help you with?
          </h1>
          <p>Joining is Quick and Easy!</p>
        </div>
        <div className="grid-x grid-padding-x align-center padding-2 margin-3 text-center">
          <div className="cell medium-3 padding-2 container-hover">
            <img src="https://placehold.it/200x200" className="circle" />
            <h3>Enthusiast</h3>
            <p className="padding-1 padding-left-3 padding-right-3">
              Taste Buddha provides a full-service booking platform for getting
              leads, sending quotes, and collecting payments.
            </p>
            <Link className="button" to="/login">
              Start Getting Gigs
            </Link>
          </div>
          <div className="cell medium-3 padding-2 container-hover">
            <img src="https://placehold.it/200x200" className="circle" />
            <h3>Client</h3>
            <p className="padding-1 padding-left-3 padding-right-3">
              Taste Buddha is the #1 platform to find local enthusiasts, request
              quotes, and make secure payments.
            </p>
            <Link className="button" to="/quote">
              Request A Quote
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
