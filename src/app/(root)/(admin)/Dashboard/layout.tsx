import Navbar from "./NavbarDashboard/Navbar";

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
