import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import React from "react";

const StatusIoT: React.FC = () => {
  return (
    <div className="p-4  rounded-xl shadow-md border-2">
      <h3 className="text-xl font-semibold mb-4">Status Perangkat IoT</h3>

      {/* IoT Kualitas Air */}
      <div className="p-4 border rounded-xl flex items-center justify-between my-2">
        <div className="flex items-center object-cover rounded-xl">
          <Image
            src="/logo/Quality.png"
            alt="IoT Kualitas Air"
            width={82}
            height={52}
          />
          <div className="mx-4">
            <h4 className="text-lg font-semibold">IoT Kualitas Air</h4>
            <p className="text-xs opacity-75 text-justify">
              Sensor ini mengukur kualitas air dari sumbernya, mencakup
              parameter seperti pH, TDS (Total Dissolved Solids), dan kekeruhan.
            </p>
          </div>
        </div>
        <div className="ml-3">
          <Badge>Aktif</Badge>
        </div>
      </div>

      {/* IoT Debit Air */}
      <div className="p-4 border rounded-xl flex items-center justify-between my-2">
        <div className="flex items-center">
          <Image
            src="/logo/Debit.png"
            alt="IoT Debit Air"
            width={52}
            height={52}
          />
          <div className="mx-4">
            <h4 className="text-lg font-semibold">IoT Debit Air</h4>
            <p className="text-xs opacity-75 text-justify ">
              Sensor ini mengukur laju aliran air melalui pipa distribusi,
              memastikan bahwa debit air sesuai dengan kebutuhan dan pesanan
              pelanggan.
            </p>
          </div>
        </div>
        <div className="ml-3">
          <Badge>Aktif</Badge>
        </div>
      </div>

      {/* IoT Kapasitas Tangki Air */}
      <div className="p-4 border rounded-xl flex items-center justify-between my-2">
        <div className="flex items-center">
          <Image
            src="/logo/Capacity.png"
            alt="IoT Kapasitas Tangki Air"
            width={52}
            height={52}
          />
          <div className="mx-4">
            <h4 className="text-lg font-semibold">IoT Kapasitas Tangki Air</h4>
            <p className="text-xs opacity-75 text-justify">
              Sensor ini mengukur kapasitas air dalam tangki secara real-time,
              memberikan informasi tentang jumlah air yang tersedia dan membantu
              dalam pengelolaan distribusi air.
            </p>
          </div>
        </div>
        <div className="ml-3">
          <Badge variant="destructive">NonAktif</Badge>
        </div>
      </div>
    </div>
  );
};

export default StatusIoT;
