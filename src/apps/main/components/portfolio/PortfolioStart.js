/* @flow */
import React from "react";
import { Link } from "react-router";
import { Icon } from "react-foundation";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSection from "./PortfolioSection";
import Box from "./Box";

export default class PortfolioStart extends React.PureComponent {
  render() {
    return (
      <Box>
        <PortfolioHeader>
          <h4 className="cell auto">Portfolio</h4>
          <Link to="/william" className="cell small-3 text-right">
            View Portfolio
          </Link>
        </PortfolioHeader>
        <div className="padding-1">
          <section className="border-bottom padding-vertical-1">
            <h2>Hello, William.</h2>
            <p>
              Ready to maximize your gigs? Below is a breakdown of the Portfolio
              elements which have the biggest impact on whether event planners
              contact you. Be sure to keep these updated regularly
            </p>
          </section>
          <PortfolioSection>
            <div className="cell medium-2 hide-for-small-only">
              <Icon
                prefix="fi"
                name="photo"
                style={{ fontSize: "6rem", lineHeight: 0 }}
              />
            </div>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">Profile Photo</b>
                <Link
                  to="/portfolio/photos/profile-photo"
                  className="cell medium-3 text-right"
                >
                  Edit
                </Link>
              </div>
              <p className="width-75">
                Your profile photo is a big deal, so make sure it’s great.
                People will make booking decisions based on this picture, so
                choose carefully.
              </p>
              <p>
                <Icon prefix="fi" name="check" /> You currently have a profile
                photo.
              </p>
            </div>
          </PortfolioSection>
          <PortfolioSection>
            <div className="cell medium-2 hide-for-small-only">
              <Icon
                prefix="fi"
                name="page"
                style={{ fontSize: "6rem", lineHeight: 0 }}
              />
            </div>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">Overview Text</b>
                <Link
                  to="/portfolio/basic-info/overview"
                  className="cell medium-3 text-right"
                >
                  Edit
                </Link>
              </div>
              <p className="width-75">
                This is your opportunity to sell yourself. Succinctly explain
                what you do and why an event needs your talent.
              </p>
              <p>
                <Icon prefix="fi" name="check" /> You currently have overview
                text
              </p>
            </div>
          </PortfolioSection>
          <PortfolioSection>
            <div className="cell medium-2 hide-for-small-only">
              <Icon
                prefix="fi"
                name="page-multiple"
                style={{ fontSize: "6rem", lineHeight: 0 }}
              />
            </div>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">Tasting Menus</b>
                <Link
                  to="/portfolio/menus"
                  className="cell medium-3 text-right"
                >
                  Add
                </Link>
              </div>
              <p className="width-75">
                Put together custom tasting menus. These are searchable by
                clients so make them good.
              </p>
              <p>
                <Icon prefix="fi" name="alert" /> You don’t have any tasting
                menus.
              </p>
            </div>
          </PortfolioSection>
          <PortfolioSection>
            <div className="cell medium-2 hide-for-small-only">
              <Icon
                prefix="fi"
                name="video"
                style={{ fontSize: "6rem", lineHeight: 0 }}
              />
            </div>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">Videos</b>
                <Link
                  to="/portfolio/videos"
                  className="cell medium-3 text-right"
                >
                  Add
                </Link>
              </div>
              <p className="width-75">
                If a picture speaks 1,000 words and a video is 24 frames per
                second — well, you do the math. That’s a lot of words. Just
                trust us: a video goes a long way.
              </p>
              <p>
                <Icon prefix="fi" name="alert" /> You don’t have any videos.
              </p>
            </div>
          </PortfolioSection>
          <PortfolioSection>
            <div className="cell medium-2 hide-for-small-only">
              <Icon
                prefix="fi"
                name="database"
                style={{ fontSize: "6rem", lineHeight: 0 }}
              />
            </div>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">Additional categories</b>
                <Link
                  to="/portfolio/categories/additional"
                  className="cell medium-3 text-right"
                >
                  Add
                </Link>
              </div>
              <p className="width-75">
                These additional categories determine where you will show up in
                searches, and they will characterize your service to event
                planners. Choose wisely.
              </p>
              <p>
                <Icon prefix="fi" name="alert" /> You don’t have any additional
                categories.
              </p>
            </div>
          </PortfolioSection>
          <PortfolioSection>
            <div className="cell medium-2 hide-for-small-only">
              <Icon
                prefix="fi"
                name="camera"
                style={{ fontSize: "6rem", lineHeight: 0 }}
              />
            </div>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">Photo Gallery</b>
                <Link
                  to="/portfolio/photos"
                  className="cell medium-3 text-right"
                >
                  Add
                </Link>
              </div>
              <p className="width-75">
                Your photo gallery is a chance to show how multifaceted you are.
                Buyers are visual — they won’t be interested in your service if
                they don’t connect with what they see.
              </p>
              <p>
                <Icon prefix="fi" name="alert" /> You don’t have any photos.
              </p>
            </div>
          </PortfolioSection>
          <PortfolioSection>
            <div className="cell medium-2 hide-for-small-only">
              <Icon
                prefix="fi"
                name="page-edit"
                style={{ fontSize: "6rem", lineHeight: 0 }}
              />
            </div>
            <div className="cell auto">
              <div className="grid-x">
                <b className="cell auto">Verified Reviews</b>
                <Link
                  to="/portfolio/reviews/request"
                  className="cell medium-3 text-right"
                >
                  Request Reviews
                </Link>
              </div>
              <p className="width-75">
                Verified reviews are submitted by buyers who book through Taste
                Buddha. Reviews definitely help event planners learn about your
                work.
              </p>
              <p>
                <Icon prefix="fi" name="alert" /> You have no verified reviews.
              </p>
            </div>
          </PortfolioSection>
          <section className="padding-vertical-1 text-center">
            <p>If you'd rather edit from the beginning</p>
            <Link to="portfolio/basic-info" className="button">
              Start Here
            </Link>
          </section>
        </div>
      </Box>
    );
  }
}
