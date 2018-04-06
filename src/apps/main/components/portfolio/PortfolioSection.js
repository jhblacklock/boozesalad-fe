/* @flow */
import React from "react";

type Props = {
  children?: any,
};

export default class PortfolioSection extends React.PureComponent {
  props: Props;
  render() {
    const { children } = this.props;

    return (
      <section className="border-bottom padding-vertical-1 grid-x grid-margin-x">
        {children}
      </section>
    );
  }
}
