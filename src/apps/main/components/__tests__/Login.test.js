import React from "react";
import { shallow } from "enzyme";

import Login from "apps/main/components/Login";

describe("apps/main/components/Login", () => {
  it("renders without an issue", () => {
    const subject = <Login />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
