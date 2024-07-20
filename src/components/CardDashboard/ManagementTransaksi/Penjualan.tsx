import React from "react";
import { BarchartInteractive } from "@/components/Charts/BarchartInteractive";

const Penjualan: React.FC = () => {
  return (
    <div className="text-black p-8  space-y-4 shadow-md border-2 rounded-xl">
      <BarchartInteractive />
    </div>
  );
};

export default Penjualan;
