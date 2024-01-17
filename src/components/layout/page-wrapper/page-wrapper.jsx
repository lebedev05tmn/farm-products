import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Page } from "./style";

export default function PageWrapper({ children, isHome }) {
  return (
    <Page>
      <Header isHome={isHome} />
      {children}
      <Footer />
    </Page>
  );
}
