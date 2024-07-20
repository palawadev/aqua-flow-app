import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-sky-500">
      <div className="px-4 md:px-16 lg:px-32">
        <div className="mt-16"></div>
        <footer className="text-white py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <div className="flex-shrink-0 mb-8">
                <Link href="/" className="flex items-center">
                  <Image
                    className="w-fit mr-2"
                    src="/logo/Logowhite.png"
                    alt="Logo"
                    width={120} // Adjust the width as needed
                    height={40} // Adjust the height as needed
                  />
                  <Image
                    className="w-fit"
                    src="/logo/Logotxtwhite.png"
                    alt="Logo"
                    width={120} // Adjust the width as needed
                    height={40} // Adjust the height as needed
                  />
                </Link>
              </div>
              <p>
                Kami adalah perusahaan yang bergerak di bidang layanan pengisian
                tangki air dengan sistem otomatisasi terkini. Misi kami adalah
                memberikan solusi terbaik bagi pelanggan dalam memenuhi
                kebutuhan air mereka, dengan mengedepankan kemudahan, kecepatan,
                dan keakuratan.
              </p>
            </div>

            <div className="col-span-6 md:col-span-3">
              <h3 className="text-xl font-semibold mb-2 underline underline-offset-8">
                Produk
              </h3>
              <ul className="list-disc list-outside">
                <li>Pengisian Tangki Air</li>
                <li>Air Minum Dalam Kemasan</li>
                <li>Air Rumah</li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-3">
              <h3 className="text-xl font-semibold mb-2 underline underline-offset-8">
                Service
              </h3>
              <ul className="list-disc list-outside">
                <li>Otomisasi Pengisian Tangki Air</li>
                <li>Pembelian Online</li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-2">
              <h3 className="text-xl font-semibold mb-2 underline underline-offset-8">
                Social Media
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center">
                    <Image
                      src="/sosmed/instagram.png"
                      alt="Instagram"
                      className="w-fit mr-2 my-2"
                      width={100} // Adjust the width as needed
                      height={100} // Adjust the height as needed
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center">
                    <Image
                      src="/sosmed/whatsapp.png"
                      alt="WA"
                      className="w-fit mr-2 my-2"
                      width={100} // Adjust the width as needed
                      height={100} // Adjust the height as needed
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center">
                    <Image
                      src="/sosmed/twitter.png"
                      alt="TWT"
                      className="w-fit mr-2 my-2"
                      width={100} // Adjust the width as needed
                      height={100} // Adjust the height as needed
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
      <div className="text-start mt-8 border-t">
        <p className="text-white py-5 px-4 md:px-16 lg:px-32">
          © Copyright Palawa Technologies 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
