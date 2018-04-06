/* @flow */

import React, { Component } from "react";

export default class Verify extends Component {
  render() {
    return (
      <div>
        <div className="width-100 text-center">
          <h1 className="separator-center">Please Verify your Email</h1>
          <p>
            We just sent you a link to verify you e mail address. Click on the
            link provided and you're ready to start booking gigs!
          </p>
        </div>
      </div>
    );
  }
}
