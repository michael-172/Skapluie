import React from "react";
import Footer from "../Components/Footer";
import App_Navbar from "../Components/App_Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <App_Navbar />
      {children}
    </>
  );
};

export default Layout;
