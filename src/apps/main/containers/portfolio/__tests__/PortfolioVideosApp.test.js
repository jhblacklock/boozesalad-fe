/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { PortfolioVideosApp } from "apps/main/containers/portfolio/PortfolioVideosApp";

describe("apps/main/containers/portfolio/PortfolioVideosApp", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioVideosApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
