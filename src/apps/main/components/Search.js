/* @flow */
import React from "react";
import UserCard from "./UserCard";
import Pagination from "./Pagination";

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
            ].map(name => {
              return <UserCard name={name} key={name} />;
            })}
          </div>
          <Pagination />
        </div>
      </div>
    );
  }
}
