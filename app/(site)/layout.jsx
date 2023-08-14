import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";
import Navbar from "@/components/Navbar";
import React from "react";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <HireMe />
    </>
  );
};

export default PageLayout;
