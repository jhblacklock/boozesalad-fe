/* @flow */
import React from "react";
import Featured from "./Featured";
import About from "./About";

export default class CategoryWithLocation extends React.PureComponent {
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
            <div className="h2">
              I want to book a <br />
              <u>Whiskey Enthusiast</u>
              <br />
              near
              <br />
              <u>Austin, TX</u>
            </div>
          </div>
          <div className="cell medium-8 text-left background-light padding-3">
            <h1>Tell us more about your Event?</h1>
            <o>
              Complete the form to receive FREE no-obligation quotes from
              Balloon Twisters in Cedar Park.
            </o>
            <section className="grid-x grid-margin-x padding-vertical-1">
              <div className="medium-6 cell">
                <label htmlFor="">
                  What type of Enthusist are you looking for?
                  <select>
                    <option value="whiskey">Whiskey Tasting</option>
                    <option value="mezcal">Mezcal Tasting</option>
                    <option value="wine">Wine Tasting</option>
                    <option value="beer">Beer Tasting</option>
                  </select>
                </label>
              </div>
            </section>
          </div>
        </div>
        <div className="grid-container padding-1">
          <Featured
            title={"Whiskey Enthusiasts / Austin, TX"}
            showPagination={true}
          />
          <About />
        </div>
      </div>
    );
  }
}
