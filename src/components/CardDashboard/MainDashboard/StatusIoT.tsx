import React from "react";

const StatusIoT: React.FC = () => {
  return (
    <div className="p-4  rounded-xl shadow-md border-2">
      <h3 className="text-xl font-semibold mb-4">Status Perangkat IoT</h3>

      {/* IoT Kualitas Air */}
      <div className="p-4 border rounded-xl flex items-center justify-between my-2">
        <div className="flex items-center">
          <img
            src="/logo/Quality.png"
            alt="IoT Kualitas Air"
            className="w-16 h-16 object-cover rounded-xl"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold">IoT Kualitas Air</h4>
            <p className="text-sm text-gray-600">
              Sensor ini mengukur kualitas air dari sumbernya, mencakup
              parameter seperti pH, TDS (Total Dissolved Solids), dan kekeruhan.
            </p>
          </div>
        </div>
        <p className="text-xl font-semibold bg-sky-100 rounded-xl p-2 text-green-500">
          Aktif
        </p>
      </div>

      {/* IoT Debit Air */}
      <div className="p-4 border rounded-xl flex items-center justify-between my-2">
        <div className="flex items-center">
          <img
            src="/logo/Debit.png"
            alt="IoT Debit Air"
            className="w-16 h-16 object-cover rounded-xl"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold">IoT Debit Air</h4>
            <p className="text-sm text-gray-600">
              Sensor ini mengukur laju aliran air melalui pipa distribusi,
              memastikan bahwa debit air sesuai dengan kebutuhan dan pesanan
              pelanggan.
            </p>
          </div>
        </div>
        <p className="text-xl font-semibold bg-sky-100 rounded-xl p-2 text-green-500">
          Aktif
        </p>
      </div>

      {/* IoT Kapasitas Tangki Air */}
      <div className="p-4 border rounded-xl flex items-center justify-between my-2">
        <div className="flex items-center">
          <img
            src="/logo/Capacity.png"
            alt="IoT Kapasitas Tangki Air"
            className="w-16 h-16 object-cover rounded-xl"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold">IoT Kapasitas Tangki Air</h4>
            <p className="text-sm text-gray-600">
              Sensor ini mengukur kapasitas air dalam tangki secara real-time,
              memberikan informasi tentang jumlah air yang tersedia dan membantu
              dalam pengelolaan distribusi air.
            </p>
          </div>
        </div>
        <p className="text-xl font-semibold bg-red-100 rounded-xl p-2 text-red-500">
          Non Aktif
        </p>
      </div>
    </div>
  );
};

export default StatusIoT;
