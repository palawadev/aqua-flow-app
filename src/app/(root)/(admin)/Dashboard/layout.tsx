import { Metadata } from "next";
import Navbar from "./NavbarDashboard/Navbar";

export const metadata: Metadata = {
  title: "Water Management System",
  description: "BARMA Technology Water Management System",
  icons: {icon: "/logo/Logowhite.png"}
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
