import React from "react";
import { shallow } from "enzyme";

import PortfolioVideos from "apps/main/components/portfolio/PortfolioVideos";

describe("apps/main/components/portfolio/PortfolioVideos", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioVideos />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
