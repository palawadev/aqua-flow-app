import ProdukItem from "@/components/CardDashboard/ManagemenProd/ProdukItem";
import ProdukList from "@/components/CardDashboard/ManagemenProd/ProdukList";
import React from "react";

const ManageProduct: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:ml-16">
      <ProdukList />
    </div>
  );
};

export default ManageProduct;
