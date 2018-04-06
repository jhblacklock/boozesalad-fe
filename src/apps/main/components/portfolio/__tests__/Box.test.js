import React from "react";
import { shallow } from "enzyme";

import Box from "apps/main/components/portfolio/Box";

describe("apps/main/components/portfolio/Box", () => {
  it("renders without an issue", () => {
    const subject = <Box />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
