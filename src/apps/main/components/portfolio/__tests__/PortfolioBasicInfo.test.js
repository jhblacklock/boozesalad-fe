import React from "react";
import { shallow } from "enzyme";

import PortfolioBasicInfo from "apps/main/components/portfolio/PortfolioBasicInfo";

describe("apps/main/components/portfolio/PortfolioBasicInfo", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioBasicInfo />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
