/* @flow */
import React from "react";
import "./Testimonials.scss";

export default class Testimonials extends React.PureComponent {
  render() {
    return (
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
    );
  }
}
