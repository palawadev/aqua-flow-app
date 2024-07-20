import KualitasSumber from "@/components/CardDashboard/MainDashboard/KualitasSumber";
import KualitasTangki from "@/components/CardDashboard/MainDashboard/KualitasTangki";
import PantauanProsesProduksi from "@/components/CardDashboard/ManagemenProduksi/PantauanProsesProduksi";

import React from "react";

const Produksi: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:ml-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10">
        <div className="col-span-1 md:col-span-2">
          <PantauanProsesProduksi />
        </div>
        <KualitasSumber />
        <KualitasTangki />
      </div>
    </div>
  );
};

export default Produksi;
