import KapasitasTangki from "@/components/CardDashboard/MainDashboard/KapasitasTangki";
import KualitasSumber from "@/components/CardDashboard/MainDashboard/KualitasSumber";
import KualitasTangki from "@/components/CardDashboard/MainDashboard/KualitasTangki";
import PenjualanProdukAir from "@/components/CardDashboard/MainDashboard/PenjualanProdukAir";
import StatusIoT from "@/components/CardDashboard/MainDashboard/StatusIoT";
import TransaksiTerbaru from "@/components/CardDashboard/MainDashboard/TransaksiTerbaru";
import UserAktif from "@/components/CardDashboard/MainDashboard/UserAktif";

import React from "react";

const Main: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:ml-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10">
        <PenjualanProdukAir />
        <KapasitasTangki />
        <KualitasSumber />
        <KualitasTangki />
        <div className="col-span-1 md:col-span-2">
          <UserAktif />
        </div>
        <TransaksiTerbaru />
        <StatusIoT />
      </div>
    </div>
  );
};

export default Main;
