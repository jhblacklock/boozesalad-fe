import React from "react";
import { shallow } from "enzyme";

import User from "apps/main/components/User";

describe("apps/main/components/User", () => {
  it("renders without an issue", () => {
    const subject = <User />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
