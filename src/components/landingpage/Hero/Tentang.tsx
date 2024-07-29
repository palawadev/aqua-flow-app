import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Tentang: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:mx-32">
      <h2 className="text-2xl font-semibold mb-4 text-center mt-16">
        Tentang Kami
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-start text-left  px-8 mt-8">
        <div className="md:w-1/2">
          <p className="mb-4">
            Kami adalah perusahaan yang berkomitmen untuk menyediakan solusi
            pengisian tangki air yang inovatif dan efisien. Dengan teknologi
            otomatisasi canggih, kami memastikan bahwa proses pengisian air
            menjadi lebih cepat, akurat, dan mudah diakses oleh pelanggan.
          </p>
          <p className="mb-4">
            Layanan kami dirancang untuk memberikan kenyamanan maksimal,
            sehingga pelanggan dapat menikmati air bersih dan berkualitas tanpa
            harus khawatir tentang proses pengisian.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
            See More
          </Button>
        </div>
        <div
          className="relative w-full md:w-1/2 mt-4 md:mt-0 md:mr-8"
          style={{ height: "400px" }}
        >
          <Image
            priority
            src="/hero/tentangkami.png"
            alt="Tentang Kami"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-xl"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Tentang;
