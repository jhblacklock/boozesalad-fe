/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { PortfolioCalendarApp } from "apps/main/containers/portfolio/PortfolioCalendarApp";

describe("apps/main/containers/portfolio/PortfolioCalendarApp", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioCalendarApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
