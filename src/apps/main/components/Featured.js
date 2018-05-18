/* @flow */
import React from "react";
import "./Featured.scss";
import UserCard from "./UserCard";
import Pagination from "./Pagination";

type Props = {
  title: string,
  showPagination: boolean,
};

export default class Featured extends React.PureComponent {
  static defaultProps = {
    title: "Spotlight",
    showPagination: false,
  };
  props: Props;
  render() {
    return (
      <div className="grid-x grid-padding-x">
        <div className="width-100">
          <h1 className="separator-left">{this.props.title}</h1>
        </div>
        {[
          "Jackson Blacklock",
          "William Blacklock",
          "Rob Huntley",
          "Justin Spencer",
          "Jackson Blacklocke ",
          "William Blacklocke",
          "Rob Huntleye",
          "Justin Spenceer",
        ].map(name => {
          return <UserCard name={name} key={name} />;
        })}
        <center className="width-100">
          {this.props.showPagination ? (
            <Pagination />
          ) : (
            <a href="#" className="button margin-auto">
              View More
            </a>
          )}
        </center>
      </div>
    );
  }
}
