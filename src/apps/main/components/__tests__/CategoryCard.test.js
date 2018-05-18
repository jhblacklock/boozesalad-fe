import React from "react";
import { shallow } from "enzyme";

import CategoryCard from "apps/main/components/CategoryCard";

describe("apps/main/components/CategoryCard", () => {
  it("renders without an issue", () => {
    const subject = <CategoryCard />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
