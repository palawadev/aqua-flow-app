"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SettingsNavigation from "@/components/CardDashboard/SettingsCard/SettingsNav";

const Settings: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("Preferences");

  const renderContent = () => {
    switch (currentPage) {
      case "Preferences":
        return (
          <div>
            <p>Your preferences content goes here</p>
          </div>
        );
      case "Notification":
        return (
          <div>
            <p>Your notification content goes here</p>
          </div>
        );
      case "Account Security":
        return (
          <div>
            <p>Your account security content goes here</p>
          </div>
        );
      case "Integration Settings":
        return (
          <div>
            <p>Your integration settings content goes here</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 flex space-x-6">
      <SettingsNavigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Card className="w-3/4">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            {currentPage}
          </CardTitle>
        </CardHeader>
        <CardContent>{renderContent()}</CardContent>
      </Card>
    </div>
  );
};

export default Settings;
