import React from "react";
import { shallow } from "enzyme";

import PortfolioMenusEdit from "apps/main/components/portfolio/PortfolioMenusEdit";

describe("apps/main/components/portfolio/PortfolioMenusEdit", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioMenusEdit />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
