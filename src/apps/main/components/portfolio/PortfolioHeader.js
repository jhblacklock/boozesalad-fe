/* @flow */
import React from "react";

type Props = {
  children?: any,
};

export default class PortfolioHeader extends React.PureComponent {
  props: Props;
  render() {
    const { children } = this.props;

    return (
      <div className="padding-1 grid-x grid-margin-x border-bottom align-middle">
        {children}
      </div>
    );
  }
}
