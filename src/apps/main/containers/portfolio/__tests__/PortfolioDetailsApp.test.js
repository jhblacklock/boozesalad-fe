/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { PortfolioDetailsApp } from "apps/main/containers/portfolio/PortfolioDetailsApp";

describe("apps/main/containers/portfolio/PortfolioDetailsApp", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioDetailsApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
