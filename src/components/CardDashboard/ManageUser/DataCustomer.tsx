import Donutchart from "@/components/Charts/Donutchart";
import Radarchart from "@/components/Charts/Radarchart";
import React from "react";

const DataCustomer: React.FC = () => {
  return (
    <div className="p-6 shadow-md border-2 rounded-xl max-w-4xl w-full mx-auto">
      <h2 className=" font-semibold text-2xl text-center mb-6">
        Data Customer
      </h2>
      <div className="flex flex-col md:flex-row gap-4 pt-10">
        <div className="p-4 rounded-xl flex justify-center items-end flex-1 ">
          <div className="w-full h-fit">
            <Donutchart />
          </div>
        </div>
        <div className="p-4 rounded-xl flex justify-center items-end flex-1 ">
          <div className="w-full h-fit">
            <Radarchart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCustomer;
