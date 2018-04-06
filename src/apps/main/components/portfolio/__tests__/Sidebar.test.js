import React from "react";
import { shallow } from "enzyme";

import Sidebar from "apps/main/components/portfolio/Sidebar";

describe("apps/main/components/portfolio/Sidebar", () => {
  it("renders without an issue", () => {
    const subject = <Sidebar />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
