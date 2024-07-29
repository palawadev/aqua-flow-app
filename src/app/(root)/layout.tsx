import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/app/(root)/(providers)/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Water Management System",
  description: "BARMA Technology Water Management System",
  icons: { icon: "/logo/Logowhite.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </main>
  );
}
