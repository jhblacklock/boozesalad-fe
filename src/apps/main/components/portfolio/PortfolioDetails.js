/* @flow */
import React from "react";
import { Link } from "react-router";
import { Icon } from "react-foundation";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSection from "./PortfolioSection";
import Box from "./Box";

export default class PortfolioDetails extends React.PureComponent {
  render() {
    return (
      <Box>
        <PortfolioHeader>
          <h4 className="cell auto">Details</h4>
          <Link to="/william" className="cell small-3 text-right">
            View Portfolio
          </Link>
        </PortfolioHeader>
        <div className="padding-1">
          <section className="border-bottom padding-vertical-1">
            <h2>The nitty gritty.</h2>
            <p>
              When you’ve piqued the interest of a potential buyer, they may dig
              deeper into your PromoKit. Here are the things they’ll be
              perusing.
            </p>
          </section>
          <PortfolioSection>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">
                  <Icon prefix="fi" name="alert" /> Biography
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
                  <Icon prefix="fi" name="alert" /> What to Expect
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
                  <Icon prefix="fi" name="alert" /> Notes/Technical Info
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
                  <Icon prefix="fi" name="alert" /> Setup Requirements
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
                  <Icon prefix="fi" name="alert" /> Liability Insurance
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
                  <Icon prefix="fi" name="check" /> Solo or Group
                </b>
                <Link to="#" className="cell medium-3 text-right">
                  Edit
                </Link>
              </div>
              <p className="width-75 margin-top-1">Solo</p>
            </div>
          </PortfolioSection>
          <PortfolioSection>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">
                  <Icon prefix="fi" name="alert" /> Influences
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
                  <Icon prefix="fi" name="alert" /> Duration
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
                  <Icon prefix="fi" name="alert" /> Languages
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
                  <Icon prefix="fi" name="alert" /> Unions
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
                  <Icon prefix="fi" name="alert" /> Social Links
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
          <section className="grid-x grid-padding-x buttons align-justify padding-1">
            <Link to="portfolio/videos" className="button">
              Back
            </Link>
            <Link to="portfolio/calendar" className="button">
              Next
            </Link>
          </section>
        </div>
      </Box>
    );
  }
}
