"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SettingsNavigation from "@/components/CardDashboard/SettingsCard/SettingsNav";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";

const Settings: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("Preferences");
  const [transparentSidebar, setTransparentSidebar] = useState(false);
  const [language, setLanguage] = useState("English");
  const { theme, setTheme } = useTheme();

  const renderContent = () => {
    switch (currentPage) {
      case "Preferences":
        return (
          <div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Theme</h3>
              <span className="text-sm font-light opacity-50">
                Select or customize your template
              </span>
              <div className="mt-2 flex space-x-4">
                <Label
                  className={`flex flex-col items-center w-1/2 space-y-2 p-2 border rounded-lg cursor-pointer ${
                    theme === "light" ? "border-blue-700" : "border-gray-700"
                  }`}
                  onClick={() => setTheme("light")}
                >
                  <Image
                    src="/Toggletheme/lightmode.png"
                    alt="Light Theme"
                    width={250}
                    height={100}
                    className="object-contain"
                  />
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="theme"
                      value="light"
                      checked={theme === "light"}
                      onChange={() => setTheme("light")}
                      className="form-radio h-4 w-4 transition duration-150 ease-in-out"
                    />
                    <span>Light</span>
                  </div>
                </Label>
                <Label
                  className={`flex flex-col items-center w-1/2 space-y-2 p-2 border rounded-lg cursor-pointer ${
                    theme === "dark" ? "border-blue-700" : "border-gray-700"
                  }`}
                  onClick={() => setTheme("dark")}
                >
                  <Image
                    src="/Toggletheme/Darkmode.png"
                    alt="Dark Theme"
                    width={250}
                    height={100}
                    className="object-contain"
                  />
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="theme"
                      value="dark"
                      checked={theme === "dark"}
                      onChange={() => setTheme("dark")}
                      className="form-radio h-4 w-4 transition duration-150 ease-in-out"
                    />
                    <span>Dark</span>
                  </div>
                </Label>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Transparent Sidebar</h3>
              <Switch
                checked={transparentSidebar}
                onCheckedChange={setTransparentSidebar}
                className="mt-2"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Language</h3>
              <div className="mt-2 flex space-x-4">
                <Label
                  className={`flex items-center space-x-2 p-2 border rounded-lg cursor-pointer ${
                    language === "Bahasa Indonesia"
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                  onClick={() => setLanguage("Bahasa Indonesia")}
                >
                  <input
                    type="radio"
                    name="language"
                    value="Bahasa Indonesia"
                    checked={language === "Bahasa Indonesia"}
                    onChange={() => setLanguage("Bahasa Indonesia")}
                    className="form-radio h-4 w-4 transition duration-150 ease-in-out"
                  />
                  <span>Bahasa Indonesia</span>
                </Label>
                <Label
                  className={`flex items-center space-x-2 p-2 border rounded-lg cursor-pointer ${
                    language === "English"
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                  onClick={() => setLanguage("English")}
                >
                  <input
                    type="radio"
                    name="language"
                    value="English"
                    checked={language === "English"}
                    onChange={() => setLanguage("English")}
                    className="form-radio h-4 w-4 transition duration-150 ease-in-out"
                  />
                  <span>English</span>
                </Label>
              </div>
            </div>
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
    <div className="sm:md-5 md:ml-10 lg:ml-60">
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
            <Separator />
          </CardHeader>
          <CardContent>{renderContent()}</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
