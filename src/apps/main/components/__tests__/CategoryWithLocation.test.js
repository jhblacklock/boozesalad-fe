import React from "react";
import { shallow } from "enzyme";

import CategoryWithLocation from "apps/main/components/CategoryWithLocation";

describe("apps/main/components/CategoryWithLocation", () => {
  it("renders without an issue", () => {
    const subject = <CategoryWithLocation />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
