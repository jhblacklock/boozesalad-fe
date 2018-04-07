/* @flow */
import React from "react";
import { Link } from "react-router";
import { Icon } from "react-foundation";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSection from "./PortfolioSection";
import Box from "./Box";

export default class PortfolioBookingTerms extends React.PureComponent {
  render() {
    return (
      <Box>
        <PortfolioHeader>
          <h4 className="cell auto">Booking Terms</h4>
          <Link to="/william" className="cell small-3 text-right">
            View Portfolio
          </Link>
        </PortfolioHeader>
        <div className="padding-1">
          <section className="border-bottom padding-vertical-1">
            <h2>The Business.</h2>
            <p>
              Set default quote settings for the quotes you send to potential
              clients. You may modify these settings at any time (including on
              the quote form itself).
            </p>
          </section>
          <PortfolioSection>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">
                  <Icon prefix="fi" name="alert" /> Cancellation Policy
                </b>
                <Link to="#" className="cell medium-3 text-right">
                  Edit
                </Link>
              </div>
              <p className="width-75 margin-top-1">
                I don't have anything yet.
              </p>
            </div>
          </PortfolioSection>
          <PortfolioSection>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">
                  <Icon prefix="fi" name="check" /> Additional Terms
                </b>
                <Link to="#" className="cell medium-3 text-right">
                  Edit
                </Link>
              </div>
              <p className="width-75 margin-top-1">Austin, TX</p>
            </div>
          </PortfolioSection>
          <PortfolioSection>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">
                  <Icon prefix="fi" name="check" /> Services Provided
                </b>
                <Link to="#" className="cell medium-3 text-right">
                  Edit
                </Link>
              </div>
              <p className="width-75 margin-top-1">
                I don't have anything yet.
              </p>
            </div>
          </PortfolioSection>
          <PortfolioSection>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">
                  <Icon prefix="fi" name="alert" /> Agreement Expiration
                </b>
                <Link to="#" className="cell medium-3 text-right">
                  Edit
                </Link>
              </div>
              <p className="width-75 margin-top-1">
                I don't have anything yet.
              </p>
            </div>
          </PortfolioSection>
          <PortfolioSection>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">
                  <Icon prefix="fi" name="lock" /> Act Name
                </b>
                <Link to="#" className="cell medium-3 text-right">
                  Contact
                </Link>
              </div>
              <p className="width-75 margin-top-1">
                I don't have anything yet.
              </p>
            </div>
          </PortfolioSection>
          <section className="grid-x grid-padding-x buttons align-right padding-1">
            <Link to="portfolio/categories" className="button">
              Next
            </Link>
          </section>
        </div>
      </Box>
    );
  }
}
