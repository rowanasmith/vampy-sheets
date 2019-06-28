import React from "react";
import ReactDOM from "react-dom";
import App from "./../../components/App";
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  it("renders a paragraph describing Bloody Sheets", () => {
    const wrapper = shallow(<App />);
    {debugger}
    expect(wrapper.text()).toContain('Create a Vampire the Masquerade')
  });
});
