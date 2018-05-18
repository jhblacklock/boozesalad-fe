/* @flow */
import React from "react";
import { Link } from "react-router";
import "./Home.scss";
import Testimonials from "./Testimonials";
import Featured from "./Featured";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="grid-x grid-padding-x">
          <div className="width-100">
            <h1 className="separator-left">What's your event?</h1>
          </div>
          {["Whiskey", "Mezcal", "Wine", "Beer"].map(cat => {
            return (
              <Link
                to="c/Whiskey-Tasting"
                className="cell medium-3 margin-bottom-2"
                key={cat}
              >
                <span>
                  <img src="https://images.pexels.com/photos/163704/bike-old-wheel-two-wheeled-vehicle-163704.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
                  <span className="image-hover-wrapper-banner h5">
                    <b>{cat} Tastings</b>
                  </span>
                  <div className="text-uppercase">
                    <small>Over 200 Enthsusiasts</small>
                  </div>
                </span>
              </Link>
            );
          })}
        </div>
        <Testimonials />
        <Featured />
      </div>
    );
  }
}
