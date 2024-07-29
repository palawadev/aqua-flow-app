"use client";
import Settings from "@/app/(root)/(admin)/Dashboard/Settings/Settings";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="sm:ml-5 md:ml-5 lg:ml-5">
      <div className="mt-[160px] ">
        <Settings />
      </div>
    </div>
  );
};

export default Page;
