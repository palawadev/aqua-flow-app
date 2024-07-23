"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import dashboardIcon from "@iconify/icons-ion/grid-outline";
import productIcon from "@iconify/icons-ion/bag-outline";
import water from "@iconify/icons-ion/water-outline";
import exchangeIcon from "@iconify/icons-ion/swap-horizontal-outline";
import networkIcon from "@iconify/icons-ion/construct-outline";
import cogsIcon from "@iconify/icons-ion/settings-outline";
import usersIcon from "@iconify/icons-ion/people-outline";
import chartIcon from "@iconify/icons-ion/stats-chart-outline";
import menuIcon from "@iconify/icons-ion/menu-outline";
import paperplane from "@iconify/icons-ion/paper-plane-outline";
import logoutIcon from "@iconify/icons-ion/log-out-outline";
import searchIcon from "@iconify/icons-ion/search-outline";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Dashboardnav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: any) => {
    if (!event.target.closest(".menu")) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { href: "/Dashboard", icon: dashboardIcon, label: "Main Dashboard" },
    {
      href: "/Dashboard/ManageProduk",
      icon: productIcon,
      label: "Management Produk",
    },
    {
      href: "/Dashboard/ManageProduksi",
      icon: water,
      label: "Management Produksi",
    },
    {
      href: "/Dashboard/ManageTransaksi",
      icon: exchangeIcon,
      label: "Management Transaksi",
    },
    {
      href: "/Dashboard/ManageIoT",
      icon: networkIcon,
      label: "Management IoT",
    },
    {
      href: "/Dashboard/ManageAssets",
      icon: cogsIcon,
      label: "Management Asset",
    },
    {
      href: "/Dashboard/ManageUser",
      icon: usersIcon,
      label: "Management User",
    },
    {
      href: "/Dashboard/ManageDistribusi",
      icon: paperplane,
      label: "Management Distribusi",
    },
    { href: "/Dashboard/DataReport", icon: chartIcon, label: "Data Reporting" },
  ];

  const getCurrentPageLabel = () => {
    const currentItem = menuItems.find((item) => item.href === pathname);
    return currentItem ? currentItem.label : "Main Dashboard";
  };

  return (
    <div className="flex">
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-md lg:hidden"
        onClick={toggleSidebar}
      >
        <Icon icon={menuIcon} />
      </button>
      <nav
        className={`fixed border border-gray-300 top-0 left-0 bg-white h-screen shadow-lg z-40 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-60 flex flex-col`}
      >
        <div className="flex items-center justify-between p-10">
          <Link href="/">
            <Image
              priority
              src="/logo/LogoDashboard.png"
              alt="Logo"
              width={150}
              height={50}
              style={{ width: "auto", height: "45px" }}
              className={`w-fit ${isOpen ? "block" : "hidden"} lg:block`}
            />
          </Link>
          <button
            className="lg:hidden text-blue-500"
            onClick={toggleSidebar}
          ></button>
        </div>
        <ScrollArea className="flex-grow">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.href}
                className={`flex items-center p-4 ${
                  pathname === item.href ? "text-blue-500" : ""
                }`}
              >
                <Icon icon={item.icon} className="mr-2" />
                <Link href={item.href}>
                  <div className={`${isOpen ? "block" : "hidden"} lg:block`}>
                    {item.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </ScrollArea>
        <div>
          <div className="p-4">
            <button
              className="flex items-center p-2 w-full text-left"
              onClick={() => console.log("Settings clicked")}
            >
              <Icon icon={cogsIcon} className="mr-2" />
              <span className={`${isOpen ? "block" : "hidden"} lg:block`}>
                Settings
              </span>
            </button>
          </div>
          <div className="p-4">
            <button
              className="flex items-center p-2 w-full text-left"
              onClick={() => console.log("Logout clicked")}
            >
              <Icon icon={logoutIcon} className="mr-2" />
              <span className={`${isOpen ? "block" : "hidden"} lg:block`}>
                Logout
              </span>
            </button>
          </div>
        </div>
      </nav>
      <main
        className={`flex-1 ml-0 ${
          isOpen ? "lg:ml-60" : "ml-0"
        } transition-margin duration-300`}
      ></main>
      <nav className="bg-white border border-gray-300 shadow-xl rounded-md fixed top-4 left-4 right-4 lg:ml-64 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center h-[120px]">
          <div className="text-start text-3xl font-semibold lg:text-2xl md:text-xl">
            <h1>{getCurrentPageLabel()}</h1>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center space-x-4">
              <form className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500"
                />
              </form>
            </div>
          </div>
          <div className="ml-auto hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <div onClick={() => {}}>
                <Image
                  className="h-8"
                  src="/bell.png"
                  alt="Notifications"
                  width={32}
                  height={32}
                />
              </div>
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <div onClick={() => {}}>
                <Image
                  className="h-9"
                  src="/settings.png"
                  alt="Settings"
                  width={36}
                  height={36}
                />
              </div>
            </button>
            <div className="relative">
              <div onClick={() => {}}>
                <Avatar>
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/100395127?s=100&v=4"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <Icon icon={searchIcon} />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 menu">
              <form className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </form>
              <div className="mt-4 flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-800">
                  <div onClick={() => {}}>
                    <Image
                      className="h-8"
                      src="/bell.png"
                      alt="Notifications"
                      width={32}
                      height={32}
                    />
                  </div>
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <div onClick={() => {}}>
                    <Image
                      className="h-9"
                      src="/settings.png"
                      alt="Settings"
                      width={36}
                      height={36}
                    />
                  </div>
                </button>
                <div className="relative">
                  <div onClick={() => {}}>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Dashboardnav;
