import React from "react";
import { shallow } from "enzyme";

import Category from "apps/main/components/Category";

describe("apps/main/components/Category", () => {
  it("renders without an issue", () => {
    const subject = <Category />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
