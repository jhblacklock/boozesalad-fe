/* @flow */
import React from "react";
import "./Home.scss";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="grid-x grid-padding-x">
          <div className="width-100 text-center">
            <h1 className="separator-center">What's your event?</h1>
          </div>
          {["Whiskey", "Mezcal", "Wine", "Beer"].map(cat => {
            return (
              <a href="#" className="cell medium-3" key={cat}>
                <span className="image-hover-wrapper">
                  <span className="image-hover-wrapper-banner">
                    {cat} Tastings
                  </span>
                  <img src="https://images.pexels.com/photos/163704/bike-old-wheel-two-wheeled-vehicle-163704.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
                </span>
              </a>
            );
          })}
        </div>

        <div className="featured-testimonials-section">
          <div className="width-100 text-center">
            <h1 className="separator-center">Testimonials</h1>
          </div>
          {[1, 2].map(() => {
            return (
              <div className="grid-x grid-padding-x">
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
      </div>
    );
  }
}
