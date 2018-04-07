import React from "react";
import { shallow } from "enzyme";

import PortfolioPhotos from "apps/main/components/portfolio/PortfolioPhotos";

describe("apps/main/components/portfolio/PortfolioPhotos", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioPhotos />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
