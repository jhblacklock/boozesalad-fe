import React from "react";
import { shallow } from "enzyme";

import PortfolioCalendar from "apps/main/components/portfolio/PortfolioCalendar";

describe("apps/main/components/portfolio/PortfolioCalendar", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioCalendar />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
