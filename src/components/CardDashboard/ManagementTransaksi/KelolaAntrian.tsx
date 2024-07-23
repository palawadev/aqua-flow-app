import Donutchart from "@/components/Charts/Donutchart";
import Radialchart from "@/components/Charts/Radialchart";
import React from "react";
import BasicBarchart from "@/components/Charts/BasicBarchart";

const KelolaAntrian: React.FC = () => {
  return (
    <div className="p-4 shadow-md border-2 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Pengelolaan Antrian</h2>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="p-4 border rounded-xl flex flex-col justify-between max-h-[300px]">
          <h3 className="text-sm font-medium mb-2">Antrian Saat ini</h3>
          <div className="w-[300px] max-h-[250px]">
            <Radialchart />
          </div>
        </div>
        <div className="p-4 border rounded-xl flex flex-col justify-between ">
          <h3 className="text-sm font-medium mb-2">Slot Tersedia</h3>
          <BasicBarchart />
        </div>
        <div className="p-4 border rounded-xl flex">
          <div className="flex-grow">
            <h3 className="text-sm font-medium mb-2">Rata-rata Produksi</h3>
            <Donutchart />
          </div>
          <div className=" flex flex-col justify-center text-xs">
            <p>Tanggal: 17/7/2024</p>
            <p>Waktu: 14:10:23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelolaAntrian;
