/* @flow */
import React from "react";
import { Link } from "react-router";
import { Icon } from "react-foundation";
import PortfolioHeader from "./PortfolioHeader";
import Box from "./Box";
import PortfolioSection from "./PortfolioSection";

export default class Portfolio extends React.PureComponent {
  render() {
    return (
      <div>
        <Box>
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
                Reply quickly to every lead. First to respond often gets the
                gig!
              </p>
              <Link to="portfolio/basic-info" className="button">
                Learn More
              </Link>
            </div>
          </PortfolioSection>
        </Box>
        <Box>
          <PortfolioHeader>
            <h4 className="cell auto">Booking Stats</h4>
            <Link to="/william" className="cell small-3 text-right">
              View Inbox
            </Link>
          </PortfolioHeader>
          <PortfolioSection>
            <div className="cell auto text-left padding-horizontal-1">
              <h4>$0.00</h4>
              <p>Earnings</p>
            </div>
            <div className="cell auto text-left padding-horizontal-1">
              <h4>0</h4>
              <p>Leads</p>
            </div>
            <div className="cell auto text-left padding-horizontal-1">
              <h4>0</h4>
              <p>Quotes</p>
            </div>
            <div className="cell auto text-left padding-horizontal-1">
              <h4>0</h4>
              <p>Bookings</p>
            </div>
            <div className="cell auto text-left padding-horizontal-1">
              <h4>0%</h4>
              <p>Closed</p>
            </div>
          </PortfolioSection>
        </Box>
        <Box>
          <PortfolioHeader>
            <h4 className="cell auto">Your Reviews</h4>
            <Link to="/william" className="cell small-3 text-right">
              View reviews
            </Link>
          </PortfolioHeader>
          <PortfolioSection>
            <div className="cell small-6 align-center-middle grid-y h3">
              <div>Your Rating</div>
              <p>
                <Icon prefix="fi" name="star" />
                <Icon prefix="fi" name="star" />
                <Icon prefix="fi" name="star" />
                <Icon prefix="fi" name="star" />
                <Icon prefix="fi" name="star" />
              </p>
            </div>
            <div className="cell small-6">
              <h4>0</h4>
              <p>Verified Reviews</p>
              <h4>0%</h4>
              <p>Unverified Reviews</p>
            </div>
          </PortfolioSection>
        </Box>
        <Box>
          <PortfolioHeader>
            <h4 className="cell auto">Visitor Stats</h4>
          </PortfolioHeader>
          <PortfolioSection>
            <div className="cell auto text-left padding-horizontal-1">
              <h4>0</h4>
              <p>Last 30 Days</p>
            </div>
            <div className="cell auto text-left padding-horizontal-1">
              <h4>0</h4>
              <p>Last 90 Days</p>
            </div>
            <div className="cell auto text-left padding-horizontal-1">
              <h4>0%</h4>
              <p>All Time</p>
            </div>
          </PortfolioSection>
        </Box>
      </div>
    );
  }
}
