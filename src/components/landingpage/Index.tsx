import React from "react";
import Landingpage from "./Hero/Landingpage";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <Landingpage />
      <Footer />
    </>
  );
};

export default Index;
