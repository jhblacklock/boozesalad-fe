/* @flow */
import React from "react";
import { Link } from "react-router";
import { Icon } from "react-foundation";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSection from "./PortfolioSection";
import Box from "./Box";

export default class PortfolioCategories extends React.PureComponent {
  render() {
    return (
      <Box>
        <PortfolioHeader>
          <h4 className="cell auto">Categories</h4>
          <Link to="/william" className="cell small-3 text-right">
            View Portfolio
          </Link>
        </PortfolioHeader>
        <div className="padding-1">
          <section className="border-bottom padding-vertical-1">
            <h2>Super Important.</h2>
            <p>
              Your category placement is the single most important part of your
              Taste Buddha profile. Choose wisely, event planners will never
              find you unless you are placed in the categories they are
              searching.
            </p>
          </section>
          <PortfolioSection>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">
                  <Icon prefix="fi" name="check" /> Main Category
                </b>
                <Link to="#" className="cell medium-3 text-right">
                  Edit
                </Link>
              </div>
              <p className="width-75 margin-top-1">Whiskey Tasting</p>
            </div>
          </PortfolioSection>
          <PortfolioSection>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">
                  <Icon prefix="fi" name="check" /> Additional Categories
                </b>
                <Link to="#" className="cell medium-3 text-right">
                  Add
                </Link>
              </div>
              <p className="width-75 margin-top-1">I don't have any yet.</p>
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
