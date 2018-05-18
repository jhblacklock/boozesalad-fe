/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { PortfolioMenusEditApp } from "apps/main/containers/portfolio/PortfolioMenusEditApp";

describe("apps/main/containers/portfolio/PortfolioMenusEditApp", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioMenusEditApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
