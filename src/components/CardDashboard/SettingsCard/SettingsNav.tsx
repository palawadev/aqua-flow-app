"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import settingsOutline from "@iconify/icons-mdi/settings";
import notificationsOutline from "@iconify/icons-mdi/bell";
import lockClosedOutline from "@iconify/icons-mdi/lock";
import extensionOutline from "@iconify/icons-mdi/extension";

interface SettingsNavigationProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const SettingsNavigation: React.FC<SettingsNavigationProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const navItems = [
    { name: "Preferences", icon: settingsOutline },
    { name: "Notification", icon: notificationsOutline },
    { name: "Account Security", icon: lockClosedOutline },
    { name: "Integration Settings", icon: extensionOutline },
  ];

  return (
    <Card className="w-1/4 bg-white dark:bg-gray-800">
      <CardContent>
        <ul className="space-y-2 pt-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Button
                variant="default"
                className={cn(
                  "w-full text-left flex items-center px-4 py-2 bg-transparent text-black dark:text-white",
                  currentPage === item.name &&
                    "bg-sky-500 text-white dark:bg-sky-700"
                )}
                onClick={() => setCurrentPage(item.name)}
              >
                <Icon icon={item.icon} className="mr-3" />
                <span className="flex-1">{item.name}</span>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SettingsNavigation;
