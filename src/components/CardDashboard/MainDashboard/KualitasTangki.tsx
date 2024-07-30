import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const KualitasTangki: React.FC = () => {
  return (
    <div className="p-4 shadow-md border-2 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">Kualitas Air (Tangki)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-xl flex flex-col justify-between">
          <div className="flex items-center">
            <Image src="/logo/PH.png" alt="ph" width={52} height={52} />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">PH (Derajat Keasaman)</h4>
              <p className="text-xs opacity-75">
                PH adalah ukuran tingkat keasaman
              </p>
            </div>
          </div>
          <div className="text-center mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 w-fit mx-auto">
            <div className="flex items-center justify-center">
              <Badge className="text-black font-semibold bg-sky-100">
                350 PPM
              </Badge>
            </div>
            <div className="flex items-center justify-center">
              <Badge className=" font-semibold bg-sky-100 text-green-500">
                Optimal
              </Badge>
            </div>
          </div>
        </div>
        <div className="p-4 border rounded-xl flex flex-col justify-between">
          <div className="flex items-center">
            <Image src="/logo/TDS.png" alt="TDS" width={52} height={52} />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">
                TDS (Total Dissolved Solids)
              </h4>
              <p className="text-xs opacity-75">
                TDS merupakan partikel kecil yang terlarut dalam air
              </p>
            </div>
          </div>
          <div className="text-center mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 w-fit mx-auto">
            <div className="flex items-center justify-center">
              <Badge className="text-black font-semibold bg-sky-100">
                350 PPM
              </Badge>
            </div>
            <div className="flex items-center justify-center">
              <Badge className=" font-semibold bg-sky-100 text-green-500">
                Optimal
              </Badge>
            </div>
          </div>
        </div>
        <div className="p-4 border rounded-xl flex flex-col justify-between col-span-1 md:col-span-2">
          <div className="flex items-center">
            <Image
              src="/logo/Turbidity.png"
              alt="AMDK"
              width={52}
              height={52}
              style={{ width: "auto", height: "auto" }}
            />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Kekeruhan (Turbidity)</h4>
              <p className="text-xs opacity-75">
                Kekeruhan mengukur tingkat kejernihan air, semakin kecil angka
                semakin jernih air.
              </p>
            </div>
          </div>
          <div className="text-center mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 w-fit mx-auto">
            <div className="flex items-center justify-center">
              <Badge className="text-black font-semibold bg-sky-100">
                0.5 NTU
              </Badge>
            </div>
            <div className="flex items-center justify-center">
              <Badge className=" font-semibold bg-sky-100 text-green-500">
                Jernih
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KualitasTangki;
