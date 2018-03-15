/* @flow */

import React, { Component } from "react";
import { Link } from "react-router";

export default class Join extends Component {
  render() {
    return (
      <div className="grid-x grid-padding-x align-center padding-2 text-center">
        <div className="cell medium-4">
          <img src="https://placehold.it/500x250" />
          <h6>BoozeSalad for</h6>
          <h2>Vendor</h2>
          <p>
            BoozeSalad provides a full-service booking platform for getting
            leads, sending quotes, and collecting payments.
          </p>
          <Link className="button" to="/login">
            Start Getting Gigs
          </Link>
        </div>
        <div className="cell medium-4">
          <img src="https://placehold.it/500x250" />
          <h6>BoozeSalad for</h6>
          <h2>Client</h2>
          <p>
            BoozeSalad is the #1 platform for finding local vendors, requesting
            quotes, and making secure payments for a safe and easy booking
            experience.
          </p>
          <Link className="button" to="/quote">
            Request A Quote
          </Link>
        </div>
      </div>
    );
  }
}
