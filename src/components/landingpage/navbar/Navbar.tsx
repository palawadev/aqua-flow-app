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
import { ModeToggle } from "@/components/ui/ModeToggle";

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

          <Link href="/">
            <button className="text-gray-600 hover:text-gray-800">
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
                  d="M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4M416.39 256a154 154 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.5 164.5 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155 155 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.5 164.5 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155 155 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47"
                />
              </svg>
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
