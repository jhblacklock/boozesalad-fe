/* @flow */
import React from "react";
import "./Home.scss";
import CategoryCard from "./CategoryCard";

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
              <a href="#" className="cell medium-3 margin-bottom-2" key={cat}>
                <span>
                  <img src="https://images.pexels.com/photos/163704/bike-old-wheel-two-wheeled-vehicle-163704.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
                  <span className="image-hover-wrapper-banner h5">
                    <b>{cat} Tastings</b>
                  </span>
                  <div className="text-uppercase">
                    <small>Over 200 Enthsusiasts</small>
                  </div>
                </span>
              </a>
            );
          })}
        </div>

        <div className="featured-testimonials-section">
          <div className="width-100">
            <h1 className="separator-left">Testimonials</h1>
          </div>
          {[1, 2].map(index => {
            return (
              <div className="grid-x grid-padding-x" key={index}>
                <div className="cell medium-6">
                  <div className="testimonial">
                    <img
                      className="profile-pic hide-for-small-only"
                      src="https://unsplash.it/201/?random"
                    />
                    <p className="featured-testimonials-quotation">
                      Hide when guests come over instantly break out into full
                      speed make cat go crazy. Meow mix meow meow cat things and
                      purring. catnip.
                    </p>
                  </div>
                </div>
                <div className="cell medium-6">
                  <div className="testimonial">
                    <img
                      className="profile-pic hide-for-small-only"
                      src="https://unsplash.it/202/?random"
                    />
                    <p className="featured-testimonials-quotation">
                      Hide when guests come over instantly break out into full
                      speed make cat go crazy. Meow mix meow meow cat things and
                      purring. catnip.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid-x grid-padding-x">
          <div className="width-100">
            <h1 className="separator-left">Spotlight</h1>
          </div>
          {[
            "Jackson Blacklock",
            "William Blacklock",
            "Rob Huntley",
            "Justin Spencer",
            "Jackson Blacklocke ",
            "William Blacklocke",
            "Rob Huntleye",
            "Justin Spencere",
          ].map(cat => {
            return <CategoryCard category={cat} key={cat} />;
          })}
        </div>
      </div>
    );
  }
}
