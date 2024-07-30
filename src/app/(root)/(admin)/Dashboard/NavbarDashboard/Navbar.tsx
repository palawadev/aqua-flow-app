"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
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
import Image from "next/image";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Separator } from "@/components/ui/separator";

const Dashboardnav: React.FC = () => {
  const { theme, setTheme } = useTheme();
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
    {
      href: "/Dashboard/Settings",
      icon: cogsIcon,
      label: "Settings",
    },
    {
      href: "/",
      icon: logoutIcon,
      label: "Logout",
    },
  ];

  const getCurrentPageLabel = () => {
    const currentItem = menuItems.find((item) => item.href === pathname);
    return currentItem ? currentItem.label : "Main Dashboard";
  };

  return (
    <div className="flex dark:bg-slate-950 bg-white">
      <button
        className="fixed top-4 left-4 z-50 p-2 dark:bg-gray-800 dark:text-white bg-blue-500 text-white rounded-md lg:hidden"
        onClick={toggleSidebar}
      >
        <Icon icon={menuIcon} />
      </button>
      <nav
        className={`fixed border-r border-gray-700/30 top-0 left-0 dark:bg-gray-800 bg-white h-screen shadow-lg z-40 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-60 flex flex-col`}
      >
        <div className="flex items-center justify-between p-8">
          <Link href="/">
            <div className="flex ">
              <Image
                priority
                src="/logo/Logowhite.png"
                alt="Logo"
                width={150}
                height={50}
                style={{ width: "40px", height: "70px" }}
              />
              <span className="font-montserrat font-medium ml-3 text-md">
                Water Management Dashboard
              </span>
            </div>
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
                key={item.label}
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
      </nav>
      <main
        className={`flex-1 ml-0 ${
          isOpen ? "lg:ml-60" : "ml-0"
        } transition-margin duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      ></main>

      <nav className="border border-gray-700/30 shadow-xl rounded-md fixed top-4 left-4 right-4 lg:ml-64 z-10 bg-white text-black dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto px-[2rem] flex justify-between items-center h-[120px]">
          <div className="text-start text-3xl font-semibold lg:text-2xl md:text-xl">
            <h1>{getCurrentPageLabel()}</h1>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center space-x-4">
              <form className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-2 border rounded-3xl focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 border-gray-300 focus:border-blue-500"
                />
              </form>
            </div>
          </div>
          <div className="ml-auto hidden md:flex items-center space-x-4">
            <Link href="/">
              <button className="dark:text-gray-300 dark:hover:text-whitetext-gray-600 hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M427.68 351.43C402 320 383.87 304 383.87 217.35C383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53c-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43C73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57M320 384v16a64 64 0 0 1-128 0v-16"
                  />
                </svg>
              </button>
            </Link>
            <ModeToggle />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button className="dark:text-gray-300 dark:hover:text-whitetext-gray-600 hover:text-gray-800">
              <Icon icon={searchIcon} />
            </button>
            <button className="dark:text-gray-300 dark:hover:text-whitetext-gray-600 hover:text-gray-800">
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
      </nav>
    </div>
  );
};

export default Dashboardnav;
