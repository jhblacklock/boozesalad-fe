/* @flow */
import React from "react";
import { Link } from "react-router";
import { Icon } from "react-foundation";

export default class User extends React.PureComponent {
  render() {
    return (
      <div>
        <div
          className="hero-section grid-x padding-1"
          style={{
            backgroundImage:
              "url(https://static.pexels.com/photos/248064/pexels-photo-248064.jpeg)",
          }}
        >
          <div className="cell medium-2 text-center">
            <div>
              <img className="rounded" src="https://unsplash.it/202/?random" />
            </div>
            <button className="button margin-top-1">Get a Quote</button>
          </div>
          <div className="cell medium-10 text-right">
            <button className="button">Share</button>
            <button className="button margin-left-1">Save</button>
          </div>
          <div className="grid-x grid-padding-x align-bottom">
            <button className="button margin-top-1">View Photos</button>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell medium-7">
              <div className="padding-1 border-bottom">
                <div className="text-uppercase">Whiskey Enthusiast</div>
                <div className="h4">
                  William Blacklock
                  <div className="h6">
                    <Icon prefix="fi" name="star" />
                    <Icon prefix="fi" name="star" />
                    <Icon prefix="fi" name="star" />
                    <Icon prefix="fi" name="star" />
                    <Icon prefix="fi" name="star" />
                    <small> 120</small>
                  </div>
                </div>
                <div className="subheader">Austin, TX</div>
              </div>
              <div className="padding-1">
                <div className="grid-x align-middle">
                  <div className="cell medium-2">
                    <img
                      className="rounded"
                      style={{ width: 50 }}
                      src="https://unsplash.it/202/?random"
                    />
                  </div>
                  <div className="cell auto bubble">
                    The Police wrote the songs and we play 'em! All the energy,
                    musicality, and sheer guts as the original, minus the big
                    egos and even bigger price tag!
                  </div>
                </div>
              </div>
              <div className="padding-1 border-top">
                <p>
                  <b>Experience</b>
                </p>
                <p>Is a somolier at Sway for 5 years.</p>
                <p>Head Chef at Il Bruto for 2 years.</p>
              </div>
            </div>
            <div className="cell medium-5 padding-1">
              <section className="border margin-bottom-3">
                <div className="padding-1">
                  <h4>Menus</h4>
                </div>
                <section className="padding-1 border-top">Menu 1</section>
                <section className="padding-1 border-top">Menu 2</section>
                <section className="padding-1 border-top">Menu 3</section>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
