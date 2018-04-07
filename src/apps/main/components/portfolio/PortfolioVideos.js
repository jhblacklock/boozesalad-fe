/* @flow */
import React from "react";
import { Link } from "react-router";
import { Icon } from "react-foundation";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSection from "./PortfolioSection";
import Box from "./Box";

export default class PortfolioVideos extends React.PureComponent {
  render() {
    return (
      <Box>
        <PortfolioHeader>
          <h4 className="cell auto">Videos</h4>
          <Link to="/william" className="cell small-3 text-right">
            View Portfolio
          </Link>
        </PortfolioHeader>
        <div className="padding-1">
          <section className="border-bottom padding-vertical-1">
            <h2>Lights, Camera, Dinero.</h2>
            <p>
              You know how they say a picture’s worth 1,000 words? Well, a video
              is 24 pictures per second, so you do the math!
            </p>
            <p>
              Tips for success: This is not a place to store your entire catalog
              of YouTube videos, but only a few of your very best. We recommend
              1‐4 total.
            </p>
          </section>
          <PortfolioSection>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">
                  <Icon prefix="fi" name="check" /> Videos
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
