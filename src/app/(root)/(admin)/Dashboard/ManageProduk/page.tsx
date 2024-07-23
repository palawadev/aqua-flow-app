import React from "react";
import ManageProduct from "./ManageProduct";

const Page: React.FC = () => {
  return (
    <div className="sm:md-5 md:ml-10 lg:ml-60">
      <div className="mt-[160px]">
        <ManageProduct />
      </div>
    </div>
  );
};

export default Page;
