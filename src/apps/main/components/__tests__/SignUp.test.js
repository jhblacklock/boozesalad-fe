import React from "react";
import { shallow } from "enzyme";

import SignUp from "apps/main/components/SignUp";

describe("apps/main/components/SignUp", () => {
  it("renders without an issue", () => {
    const subject = <SignUp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
