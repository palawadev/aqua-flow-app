import React from "react";
import GroupedBarchart from "@/components/Charts/GroupedBarchart";

const DataUserPerbulan: React.FC = () => {
  return (
    <div className="text-black p-8  space-y-4 shadow-md border-2 rounded-xl">
      <div className="w-full flex justify-between items-center mb-4">
        <h2 className="text-black font-semibold text-2xl text-start">
          Data Customer Perbulan
          <br />
          <span className="text-black font-normal text-sm text-start">
            Menunjukan penjualan produk air selama 6 bulan terakhir
          </span>
        </h2>
      </div>
      <div className="p-4 rounded-xl col-span-1">
        <GroupedBarchart />
      </div>
    </div>
  );
};

export default DataUserPerbulan;
