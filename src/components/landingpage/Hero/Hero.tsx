import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[400px]">
      <div className="absolute inset-0">
        <Image
          src="/hero/hero.png"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      <div className="relative z-1 mx-4 md:mx-16 lg:mx-32 flex items-center h-full">
        <div className="text-left text-white px-8">
          <h1 className="text-3xl sm:text-3xl font-semibold mb-4 p-2 text-black">
            Pengisian Air Cerdas dengan Layanan <br /> Terbaik dan Teknologi
            Otomatis
          </h1>
          <div className="flex space-x-4 mt-4">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
              Pesan
            </Button>
            <Button className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded-xl">
              Produk Kami
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
