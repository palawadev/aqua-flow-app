import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Layanan: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:mx-32">
      <h2 className="text-2xl font-semibold mb-4 text-center mt-16">
        Layanan Kami
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-start text-left  px-8 mt-8">
        <div
          className="relative w-full md:w-1/2 mt-4 md:mt-0 md:mr-8"
          style={{ height: "400px" }}
        >
          <Image
            priority
            src="/hero/Layanan.png"
            alt="Tentang Kami"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-xl"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="md:w-1/2">
          <p className="mb-4">
            Kami menyediakan layanan pengisian tangki air yang mengedepankan
            otomatisasi dan kenyamanan. Melalui sistem inovatif kami, proses
            pengisian air menjadi lebih cepat dan efisien, memastikan pelanggan
            mendapatkan air berkualitas dengan mudah.
          </p>
          <p className="mb-4">
            Layanan kami memungkinkan pelanggan untuk melakukan pembelian secara
            online, memilih waktu pengisian yang sesuai, dan memantau proses
            pengisian secara real-time.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
            See More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
