/* @flow */
import React from "react";
import { Link } from "react-router";
import { Icon } from "react-foundation";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSection from "./PortfolioSection";

export default class Portfolio extends React.PureComponent {
  render() {
    return (
      <div>
        <PortfolioHeader>
          <h4 className="cell auto">What to do next?</h4>
        </PortfolioHeader>
        <PortfolioSection>
          <div className="cell medium-4 text-center">
            <Icon
              prefix="fi"
              name="page-edit"
              style={{ fontSize: "6rem", lineHeight: 0 }}
            />
            <p>
              <b>Add more</b>
            </p>
            <p>
              Attract clients by adding photos, videos, and more to your
              profile.
            </p>
            <Link to="/portfolio/start" className="button">
              Edit Portfolio
            </Link>
          </div>
          <div className="cell medium-4 text-center">
            <Icon
              prefix="fi"
              name="torso"
              style={{ fontSize: "6rem", lineHeight: 0 }}
            />
            <p>
              <b>Check it out</b>
            </p>
            <p>
              Want to see what the client sees? Take a look at your PromoKit.
            </p>
            <Link to="/william" className="button">
              View Portfolio
            </Link>
          </div>
          <div className="cell medium-4 text-center">
            <Icon
              prefix="fi"
              name="address-book"
              style={{ fontSize: "6rem", lineHeight: 0 }}
            />
            <p>
              <b>Get Booked</b>
            </p>
            <p>
              Reply quickly to every lead. First to respond often gets the gig!
            </p>
            <Link to="portfolio/basic-info" className="button">
              Learn More
            </Link>
          </div>
        </PortfolioSection>
      </div>
    );
  }
}
