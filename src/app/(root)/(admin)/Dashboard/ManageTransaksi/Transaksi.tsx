import KelolaAntrian from "@/components/CardDashboard/ManagementTransaksi/KelolaAntrian";
import KelolaHistory from "@/components/CardDashboard/ManagementTransaksi/KelolaHistory";
import PelacakanStatus from "@/components/CardDashboard/ManagementTransaksi/PelacakanStatus";
import Penjualan from "@/components/CardDashboard/ManagementTransaksi/Penjualan";

import React from "react";

const Transaksi: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:ml-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10">
        <div className="col-span-1 md:col-span-2">
          <KelolaAntrian />
        </div>
        <PelacakanStatus />
        <KelolaHistory />
      </div>
      <div className="col-span-1 md:col-span-2 mb-10">
        <Penjualan />
      </div>
    </div>
  );
};

export default Transaksi;
