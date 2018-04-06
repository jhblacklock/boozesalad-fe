import React from "react";
import { shallow } from "enzyme";

import PortfolioSection from "apps/main/components/portfolio/PortfolioSection";

describe("apps/main/components/portfolio/PortfolioSection", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioSection />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
