import React from "react";
import Areachart from "@/components/Charts/Areachart";

const PenjualanProdukAir: React.FC = () => {
  return (
    <div className=" p-8  space-y-4 shadow-md border-2 rounded-xl">
      <div className="w-full flex justify-between items-center mb-4">
        <h2 className=" font-semibold text-2xl text-start">
          Penjualan Produk Air
          <br />
          <span className=" font-normal text-sm text-start">
            Menunjukan penjualan produk air selama 6 bulan terakhir
          </span>
        </h2>
      </div>
      <div className="p-4 rounded-xl col-span-1">
        <Areachart />
      </div>
    </div>
  );
};

export default PenjualanProdukAir;
