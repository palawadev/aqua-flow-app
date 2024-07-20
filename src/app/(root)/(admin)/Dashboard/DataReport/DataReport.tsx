import DataCustomerCard from "@/components/CardDashboard/DataReporting/DataCustomerCard";
import DataKapasitasAir from "@/components/CardDashboard/DataReporting/DataKapasitasAir";
import DataKualitasAir from "@/components/CardDashboard/DataReporting/DataKualitasAir";
import DataTransaksi from "@/components/CardDashboard/DataReporting/DataTransaksi";
import React from "react";

const DataReport: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:ml-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10">
        <DataTransaksi />
        <DataKualitasAir />
        <DataKapasitasAir />
        <DataCustomerCard />
      </div>
    </div>
  );
};

export default DataReport;
