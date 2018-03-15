import React from "react";
import { shallow } from "enzyme";

import Join from "apps/main/components/Join";

describe("apps/main/components/Join", () => {
  it("renders without an issue", () => {
    const subject = <Join />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
