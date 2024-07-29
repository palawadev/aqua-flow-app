import React from "react";
import Radialchart from "@/components/Charts/Radialchart";

const KapasitasTangki: React.FC = () => {
  return (
    <div className=" p-8  space-y-4 shadow-md border-2 rounded-xl">
      <div className="w-full mb-4">
        <h2 className=" font-semibold text-2xl text-start">
          Kapasitas Tangki Air
          <br />
          <span className=" font-normal text-sm text-start">
            Data Kapasitas Air Real-time
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <p className=" font-normal text-lg">Tanggal: 17/7/2024</p>
          <p className=" font-normal text-lg">Waktu: 14:10:23</p>
          <br />
          <br />
          <p className=" font-semibold text-2xl">Kapasitas: 200/35000 Liter</p>
        </div>
        <div className="flex justify-center items-center min-w-content">
          <div className="max-h-content w-full">
            <Radialchart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KapasitasTangki;
