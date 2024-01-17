import React from "react";
import HomePage from "../pages/home/home";
import OrderPage from "../pages/order/order";
import ScrollToTop from "../ui/scroll/scroll";
import { GlobalStyle } from "./style";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
