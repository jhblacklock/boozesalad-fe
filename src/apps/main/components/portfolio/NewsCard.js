/* @flow */
import React, { Component } from "react";
import PortfolioHeader from "./PortfolioHeader";

export default class NewsCard extends Component {
  render() {
    return (
      <div>
        <PortfolioHeader>
          <b>News</b>
        </PortfolioHeader>
        <section className="border-bottom padding-1 grid-y">
          <div>
            <b>2/2/2018</b>
          </div>
          <p>
            When you book a gig outside of Taste Buddha, you can now pay a small
            service fee to mark that lead as booked and get all the benefits of
            a verified booking. This includes verified reviews, more leads, and
            a step closer to earning Top Performer status! Not to mention,
            showing love to Taste Buddha for delivering the lead gets you good{" "}
          </p>
        </section>
      </div>
    );
  }
}
