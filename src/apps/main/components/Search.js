/* @flow */
import React from "react";
import UserCard from "./UserCard";

export default class Search extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="padding-horizontal-1 border-bottom padding-top-1">
          <button className="hollow button margin-right-1" href="#">
            Event Type
          </button>
          <button className="hollow button secondary margin-right-1" href="#">
            Location
          </button>
          <button className="hollow button secondary margin-right-1" href="#">
            More Filters
          </button>
        </div>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="width-100">
              <h1 className="separator-left">
                82 Whiskey Enthusiasts in Austin
              </h1>
            </div>
            {[
              "Jackson Blacklock",
              "William Blacklock",
              "Rob Huntley",
              "Justin Spencer",
              "Jackson Blacklocke ",
              "William Blacklocke",
              "Rob Huntleye",
              "Justin Spencere",
              ].map(cat => {
                return <UserCard category={cat} key={cat} />;
              })}
          </div>

          <nav
            aria-label="Pagination"
            className="grid-x grid-padding-x align-center"
          >
            <ul className="pagination">
              <li className="pagination-previous disabled">
                Previous <span className="show-for-sr">page</span>
              </li>
              <li className="current">
                <span className="show-for-sr">You're on page</span> 1
              </li>
              <li>
                <a href="#" aria-label="Page 2">
                  2
                </a>
              </li>
              <li>
                <a href="#" aria-label="Page 3">
                  3
                </a>
              </li>
              <li>
                <a href="#" aria-label="Page 4">
                  4
                </a>
              </li>
              <li className="ellipsis" aria-hidden="true" />
              <li>
                <a href="#" aria-label="Page 12">
                  12
                </a>
              </li>
              <li>
                <a href="#" aria-label="Page 13">
                  13
                </a>
              </li>
              <li className="pagination-next">
                <a href="#" aria-label="Next page">
                  Next <span className="show-for-sr">page</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
