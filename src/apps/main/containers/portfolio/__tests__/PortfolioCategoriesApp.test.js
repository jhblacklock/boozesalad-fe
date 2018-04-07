/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { PortfolioCategoriesApp } from "apps/main/containers/portfolio/PortfolioCategoriesApp";

describe("apps/main/containers/portfolio/PortfolioCategoriesApp", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioCategoriesApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
