/* @flow */
import React from "react";
import { Link } from "react-router";
import Testimonials from "./Testimonials";
import Featured from "./Featured";
import About from "./About";

export default class Category extends React.PureComponent {
  render() {
    return (
      <div>
        <div
          className="hero-section grid-x"
          style={{
            backgroundImage:
              "url(https://static.pexels.com/photos/248064/pexels-photo-248064.jpeg)",
          }}
        >
          <div className="cell medium-4 text-left background-primary color-white padding-3">
            <h1>Whiskey Tastings Near You</h1>
            <p>
              Find a local whiskey Enthusiast to share their taste preferences
              with you and your guests.
            </p>
          </div>
        </div>
        <div className="cell medium-12 text-left background-light padding-3">
          <h2>Where do you need a Whiskey Enthusiast?</h2>
          <div className="buttons">
            {[
              "Austin",
              "Bastrop",
              "Pfluggerville",
              "Round Rock",
              "Buda",
              "San Antonio",
            ].map(button => (
              <Link
                to="c/Whiskey-Tasting/TX/Austin"
                key={button}
                className="button margin-right-1"
              >
                {button}
              </Link>
            ))}
            <input
              className="input-group-field"
              style={{ maxWidth: 300 }}
              type="text"
              placeholder="Find a City"
            />
          </div>
        </div>
        <div className="grid-container padding-1">
          <About />
          <Testimonials />
          <Featured />
        </div>
      </div>
    );
  }
}
