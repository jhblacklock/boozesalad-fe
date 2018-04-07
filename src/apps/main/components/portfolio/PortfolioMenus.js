/* @flow */
import React from "react";
import { Link } from "react-router";
import { Icon } from "react-foundation";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSection from "./PortfolioSection";
import Box from "./Box";

export default class PortfolioMenus extends React.PureComponent {
  render() {
    return (
      <Box>
        <PortfolioHeader>
          <h4 className="cell auto">Menus</h4>
          <Link to="/william" className="cell small-3 text-right">
            View Portfolio
          </Link>
        </PortfolioHeader>
        <div className="padding-1">
          <section className="border-bottom padding-vertical-1">
            <h2>The Goods.</h2>
            <p>Try to create a Tasting Menu for each category you belong to.</p>
          </section>
          <PortfolioSection>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">
                  <Icon prefix="fi" name="check" /> Menus
                </b>
                <Link to="#" className="cell medium-3 text-right">
                  Add
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
