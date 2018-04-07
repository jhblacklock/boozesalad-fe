import React from "react";
import { shallow } from "enzyme";

import PortfolioBookingTerms from "apps/main/components/portfolio/PortfolioBookingTerms";

describe("apps/main/components/portfolio/PortfolioBookingTerms", () => {
  it("renders without an issue", () => {
    const subject = <PortfolioBookingTerms />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
