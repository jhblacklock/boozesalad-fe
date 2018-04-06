import React from "react";
import { shallow } from "enzyme";

import Header from "apps/main/components/portfolio/PortfolioHeader";

describe("apps/main/components/portfolio/PortfolioHeader", () => {
  it("renders without an issue", () => {
    const subject = <Header />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
