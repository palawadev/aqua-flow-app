import UserAktif from "@/components/CardDashboard/MainDashboard/UserAktif";
import CustTable from "@/components/CardDashboard/ManageUser/CustTable";
import DataCustomer from "@/components/CardDashboard/ManageUser/DataCustomer";
import DataUserPerbulan from "@/components/CardDashboard/ManageUser/DataUserPerbulan";

import React from "react";

const ManageUser: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:ml-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10">
        <div className="col-span-1 md:col-span-2">
          <UserAktif />
        </div>
        <DataUserPerbulan />
        <DataCustomer />
      </div>
      <div className="col-span-1 md:col-span-2 mb-10">
        <CustTable />
      </div>
    </div>
  );
};

export default ManageUser;
