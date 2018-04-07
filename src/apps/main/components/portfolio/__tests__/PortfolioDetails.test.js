import React from "react";
import { shallow } from "enzyme";

import PortfolioDetails from "apps/main/components/portfolio/PortfolioDetails";

describe("apps/main/components/portfolio/PortfolioDetails", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioDetails />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
