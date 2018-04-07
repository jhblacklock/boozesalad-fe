/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { PortfolioMenusApp } from "apps/main/containers/portfolio/PortfolioMenusApp";

describe("apps/main/containers/portfolio/PortfolioMenusApp", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioMenusApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
