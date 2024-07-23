import Areachart from "@/components/Charts/Areachart";
import GroupedBarchart from "@/components/Charts/GroupedBarchart";
import Donutchart from "@/components/Charts/Donutchart";
import React from "react";

const PantauanProsesProduksi: React.FC = () => {
  return (
    <div className="p-4 shadow-md border-2 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Pemantauan Proses Produksi</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 border rounded-xl flex flex-col justify-between">
          <h3 className="text-sm font-medium mb-2">Produksi Harian</h3>
          <Areachart />
        </div>
        <div className="p-4 border rounded-xl flex flex-col justify-between">
          <h3 className="text-sm font-medium mb-2">Produksi Bulanan</h3>
          <GroupedBarchart />
        </div>
        <div className="p-4 border rounded-xl flex items-center">
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

export default PantauanProsesProduksi;
