"use client";

import SettingsNavigation from "@/components/CardDashboard/SettingsCard/SettingsNav";
import React, { useState } from "react";

const Page: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("Preferences");

  return (
    <div className="sm:md-5 md:ml-10 lg:ml-60">
      <div className="mt-[160px] ml-8">
        <SettingsNavigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Page;
