/* @flow */
import React from "react";

type Props = {
  children?: any,
};

export default class Box extends React.PureComponent {
  props: Props;
  render() {
    const { children } = this.props;

    return <section className="border margin-bottom-3">{children}</section>;
  }
}
