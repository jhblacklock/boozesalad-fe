/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { PortfolioBookingTermsApp } from "apps/main/containers/portfolio/PortfolioBookingTermsApp";

describe("apps/main/containers/portfolio/PortfolioBookingTermsApp", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioBookingTermsApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
