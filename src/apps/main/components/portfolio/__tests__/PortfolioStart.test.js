import React from "react";
import { shallow } from "enzyme";

import PortfolioStart from "apps/main/components/portfolio/PortfolioStart";

describe("apps/main/components/portfolio/PortfolioStart", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioStart />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
