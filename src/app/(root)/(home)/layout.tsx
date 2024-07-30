import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Water Management System",
  description: "BARMA Technology Water Management System",
  icons: { icon: "/logo/Logowhite.png" },
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <main className="font-montserrat">{children}</main>;
}
