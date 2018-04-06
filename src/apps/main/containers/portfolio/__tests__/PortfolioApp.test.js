/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { PortfolioApp } from "apps/main/containers/portfolio/PortfolioApp";

describe("apps/main/containers/portfolio/PortfolioApp", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
