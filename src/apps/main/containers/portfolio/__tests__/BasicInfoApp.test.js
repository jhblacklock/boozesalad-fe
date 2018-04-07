/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { PortfolioBasicInfoApp } from "apps/main/containers/portfolio/PortfolioBasicInfoApp";

describe("apps/main/containers/portfolio/PortfolioBasicInfoApp", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioBasicInfoApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
