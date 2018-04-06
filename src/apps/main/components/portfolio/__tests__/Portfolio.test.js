import React from "react";
import { shallow } from "enzyme";

import Portfolio from "apps/main/components/portfolio/Portfolio";

describe("apps/main/components/portfolio/Portfolio", () => {
  it("renders without an issue", () => {
    const subject = <Portfolio />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
