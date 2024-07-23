"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ListItem from "./ListItem";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Pengisian Tangki Air",
    href: "/Pengisian Tangki Air",
    description: "",
  },
  {
    title: "Air Minum Dalam Kemasan",
    href: "/Air Minum Dalam Kemasan",
    description: "",
  },
  {
    title: "Air Rumah",
    href: "/Air Rumah",
    description: "",
  },
];

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-xl z-11">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center p-4">
              <Image
                priority
                src="/logo/Logo.png"
                alt="Logo"
                width={150}
                height={50}
                style={{ width: "auto", height: "45px" }}
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex flex-grow justify-center z-">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="/" title="Home">
                      Navigate to the Home page.
                    </ListItem>
                    <ListItem href="/about" title="About">
                      Learn more about us.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        href={component.href}
                        title={component.title}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Service</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem
                      href="/service/tangki"
                      title="Otomisasi Pengisian Tangki Air"
                    >
                      Automate tank filling.
                    </ListItem>
                    <ListItem
                      href="/service/pembelian"
                      title="Pembelian Online"
                    >
                      Online purchasing.
                    </ListItem>
                    <ListItem href="/Dashboard" title="Dashboard">
                      Access your dashboard.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-auto hidden md:flex items-center space-x-4">
          <Link href="/">
            <button className="text-gray-600 hover:text-gray-800">
              <Image
                src="/bell.png"
                alt="Notifications"
                width={32}
                height={32}
                className="h-auto"
              />
            </button>
          </Link>
          <Link href="/">
            <button className="text-gray-600 hover:text-gray-800">
              <Image
                src="/settings.png"
                alt="Settings"
                width={36}
                height={36}
                className="h-auto"
              />
            </button>
          </Link>
          <div className="relative">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/100395127?s=100&v=4"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
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
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="/" title="Home">
                      Navigate to the Home page.
                    </ListItem>
                    <ListItem href="/about" title="About">
                      Learn more about us.
                    </ListItem>
                    <ListItem
                      href="/service/tangki"
                      title="Otomisasi Pengisian Tangki Air"
                    >
                      Automate tank filling.
                    </ListItem>
                    <ListItem
                      href="/service/pembelian"
                      title="Pembelian Online"
                    >
                      Online purchasing.
                    </ListItem>
                    <ListItem href="/Dashboard" title="Dashboard">
                      Access your dashboard.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
