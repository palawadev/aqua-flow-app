import React from "react";
import Image from "next/image";

const Produk: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:mx-32">
      <h2 className="text-2xl font-semibold mb-4 text-center mt-16">
        Produk Kami
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center text-center text-black px-8 mt-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/3 relative h-80">
          <Image
            src="/produk/Tangki Air.png"
            alt="Pengisian Tangki Air"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-xl"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl hover:bg-opacity-10">
            <span className="text-white font-semibold">
              Pengisian Tangki Air
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/3 relative h-80">
          <Image
            src="/produk/AMDK.png"
            alt="Air Minum Dalam Kemasan"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-xl"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl hover:bg-opacity-10">
            <span className="text-white font-semibold">
              Air Minum Dalam Kemasan
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/3 relative h-80">
          <Image
            src="/produk/Air Rumah.png"
            alt="Air Rumah"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-xl"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl hover:bg-opacity-10">
            <span className="text-white font-semibold">Air Rumah</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produk;
