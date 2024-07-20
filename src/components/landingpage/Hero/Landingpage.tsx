import React from "react";
import Hero from "./Hero";
import Tentang from "./Tentang";
import Produk from "./Produk";
import Layanan from "./Layanan";

const Landingpage: React.FC = () => {
  return (
    <>
      <Hero />
      <Tentang />
      <Produk />
      <Layanan />
    </>
  );
};

export default Landingpage;
