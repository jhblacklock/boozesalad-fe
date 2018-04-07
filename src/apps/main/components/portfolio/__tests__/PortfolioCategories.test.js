import React from "react";
import { shallow } from "enzyme";

import PortfolioCategories from "apps/main/components/portfolio/PortfolioCategories";

describe("apps/main/components/portfolio/PortfolioCategories", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioCategories />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
