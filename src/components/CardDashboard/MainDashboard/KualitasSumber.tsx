import React from "react";

const KualitasSumber: React.FC = () => {
  return (
    <div className="p-4 shadow-md border-2 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">Kualitas Air (Sumber)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-xl flex flex-col justify-between">
          <div className="flex items-center">
            <img
              src="\logo\PH.png"
              alt="ph"
              className="w-16 h-16 object-cover rounded-xl"
            />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">PH (Derajat Keasaman)</h4>
              <p className="text-sm text-gray-600">
                PH adalah ukuran tingkat keasaman
              </p>
            </div>
          </div>
          <div className="text-center mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <p className="text-xl font-semibold bg-sky-100 rounded-xl p-2">
              350 PPM
            </p>
            <div className="bg-sky-100 rounded-xl p-2 flex items-center justify-center">
              <p className="text-green-500 font-semibold">Optimal</p>
            </div>
          </div>
        </div>
        <div className="p-4 border rounded-xl flex flex-col justify-between">
          <div className="flex items-center">
            <img
              src="\logo\TDS.png"
              alt="TDS"
              className="w-16 h-16 object-cover rounded-xl"
            />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">
                TDS (Total Dissolved Solids)
              </h4>
              <p className="text-sm text-gray-600">
                TDS merupakan partikel kecil yang terlarut dalam air
              </p>
            </div>
          </div>
          <div className="text-center mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <p className="text-xl font-semibold bg-sky-100 rounded-xl p-2">
              350 PPM
            </p>
            <div className="bg-sky-100 rounded-xl p-2 flex items-center justify-center">
              <p className="text-green-500 font-semibold">Optimal</p>
            </div>
          </div>
        </div>
        <div className="p-4 border rounded-xl flex flex-col justify-between col-span-1 md:col-span-2">
          <div className="flex items-center">
            <img
              src="\logo\Turbidity.png"
              alt="AMDK"
              className="w-fit h-16 object-cover rounded-xl"
            />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Kekeruhan (Turbidity)</h4>
              <p className="text-sm text-gray-600">
                Kekeruhan mengukur tingkat kejernihan air, semakin kecil angka
                semakin jernih air.
              </p>
            </div>
          </div>
          <div className="text-center mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <p className="text-xl font-semibold bg-sky-100 rounded-xl p-2">
              0.5 NTU
            </p>
            <div className="bg-sky-100 rounded-xl p-2 flex items-center justify-center">
              <p className="text-green-500 font-semibold">Jernih</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KualitasSumber;
