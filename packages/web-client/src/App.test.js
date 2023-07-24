import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import StaffPage from "./pages/StaffPage";
import "./setupTests"

describe("App component", () => {
  it("renders the correct routes", () => {
    const wrapper = shallow(<App />);
    const routes = wrapper.find(Routes);

    expect(routes).toHaveLength(1);
    expect(routes.find(Route)).toHaveLength(3);

    const routePaths = routes.find(Route).map((route) => route.prop("path"));
    expect(routePaths).toEqual(["/waiters", "/cooks", "/"]);
  });

  it("renders the StaffPage component with the correct staffType prop for '/waiters'", () => {
    const wrapper = shallow(<App />);
    const staffPageRoute = wrapper.find(Route).at(0);

    expect(staffPageRoute.prop("element")).toEqual(
      <StaffPage staffType="waiters" />
    );
  });

  it("renders the StaffPage component with the correct staffType prop for '/cooks'", () => {
    const wrapper = shallow(<App />);
    const staffPageRoute = wrapper.find(Route).at(1);

    expect(staffPageRoute.prop("element")).toEqual(
      <StaffPage staffType="cooks" />
    );
  });

  it("renders the StaffPage component with the correct staffType prop for the default route '/'", () => {
    const wrapper = shallow(<App />);
    const staffPageRoute = wrapper.find(Route).at(2);

    expect(staffPageRoute.prop("element")).toEqual(
      <StaffPage staffType="waiters" />
    );
  });
});
