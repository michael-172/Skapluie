import React from "react";
import App_Navbar from "../Components/App_Navbar";
import Footer from "../Components/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <div className="test">
        <App_Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
