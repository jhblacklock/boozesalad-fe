import React from "react";
import { shallow } from "enzyme";

import PortfolioMenus from "apps/main/components/portfolio/PortfolioMenus";

describe("apps/main/components/portfolio/PortfolioMenus", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioMenus />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
