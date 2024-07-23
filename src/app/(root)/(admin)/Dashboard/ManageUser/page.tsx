import React from "react";
import ManageUser from "./ManageUser";

const Page: React.FC = () => {
  return (
    <div className="sm:md-5 md:ml-10 lg:ml-60">
      <div className="mt-[160px]">
        <ManageUser />
      </div>
    </div>
  );
};

export default Page;
