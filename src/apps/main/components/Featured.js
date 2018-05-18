/* @flow */
import React from "react";
import "./Featured.scss";
import CategoryCard from "./CategoryCard";

type Props = {
  title: String,
};

export default class Featureds extends React.PureComponent {
  static defaultProps = {
    title: "Spotlight",
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
          "Justin Spencere",
        ].map(cat => {
          return <CategoryCard category={cat} key={cat} />;
        })}
      </div>
    );
  }
}
