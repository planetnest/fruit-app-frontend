import { shallow } from "enzyme";
import React from "react";
import Single from "../../../pages/single";

describe("Single Page", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Single />);
    expect(wrapper).toMatchSnapshot();
  });
});
