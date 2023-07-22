import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import StaffPage from "./pages/StaffPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/waiters" element={<StaffPage staffType="waiters" />} />
          <Route path="/cooks" element={<StaffPage staffType="cooks" />} />
          <Route path="/" element={<StaffPage staffType="waiters" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
