import React from "react";
import { Icon } from "@iconify/react";
import calendarIcon from "@iconify-icons/mdi/calendar-blank";
import walletIcon from "@iconify-icons/mdi/wallet";
import chartIcon from "@iconify-icons/mdi/chart-bar";
import detailsIcon from "@iconify-icons/mdi/clipboard-list";

import { Button } from "@/components/ui/button";

const dataTransaksiItems = [
  {
    icon: calendarIcon,
    label: "Data Transaksi",
    buttonLabel: "Lihat data",
    href: "/data-transaksi",
  },
  {
    icon: walletIcon,
    label: "Total Transaksi",
    buttonLabel: "Lihat data",
    href: "/total-transaksi",
  },
  {
    icon: chartIcon,
    label: "Grafik Transaksi Harian",
    buttonLabel: "Lihat data",
    href: "/grafik-transaksi-harian",
  },
  {
    icon: detailsIcon,
    label: "Rincian Transaksi",
    buttonLabel: "Lihat data",
    href: "/rincian-transaksi",
  },
];

const DataTransaksi: React.FC = () => {
  return (
    <div className="p-6 shadow-md border rounded-xl bg-white max-w-4xl w-full mx-auto">
      <h2 className="text-black font-semibold text-2xl mb-4">Data Transaksi</h2>
      <div className="space-y-4">
        {dataTransaksiItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 border rounded-lg"
          >
            <div className="flex items-center">
              <Icon icon={item.icon} className="text-2xl mr-4" />
              <span className="text-lg">{item.label}</span>
            </div>
            <Button>
              <a href={item.href}>{item.buttonLabel}</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTransaksi;
