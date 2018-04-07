/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { PortfolioPhotosApp } from "apps/main/containers/portfolio/PortfolioPhotosApp";

describe("apps/main/containers/portfolio/PortfolioPhotosApp", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioPhotosApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
