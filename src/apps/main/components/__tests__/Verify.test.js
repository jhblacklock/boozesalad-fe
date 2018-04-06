import React from "react";
import { shallow } from "enzyme";

import Verify from "apps/main/components/Verify";

describe("apps/main/components/Verify", () => {
  it("renders without an issue", () => {
    const subject = <Verify />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
