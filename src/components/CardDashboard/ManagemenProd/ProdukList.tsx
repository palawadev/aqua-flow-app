import React from "react";
import ProdukItem from "./ProdukItem";

const productsData = [
  {
    id: 1,
    title: "Paket 5000 Liter",
    price: "50.000Rp",
    description:
      "Air mineral berkualitas tinggi, bersumber dari mata air pegunungan alami",
  },
  {
    id: 2,
    title: "Paket 3000 Liter",
    price: "25.000Rp",
    description:
      "Air mineral berkualitas tinggi, bersumber dari mata air pegunungan alami",
  },
  {
    id: 3,
    title: "Paket 1000 Liter",
    price: "10.000Rp",
    description:
      "Air mineral berkualitas tinggi, bersumber dari mata air pegunungan alami",
  },
];

const ProdukList: React.FC = () => {
  return (
    <div>
      <ProdukItem
        image="\produk\Tangki Air.png"
        title="Pengisian Tangki Air"
        products={productsData}
      />
      <ProdukItem
        image="\produk\AMDK.png"
        title="Air Minum Dalam Kemasan"
        products={productsData}
      />
      <ProdukItem
        image="\produk\Air Rumah.png"
        title="Air Rumah"
        products={productsData}
      />
      <div className="flex justify-center mt-8">
        <button className="flex items-center justify-center border-dashed border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
          <span className="mr-2 text-xl">+</span> Tambah Produk
        </button>
      </div>
    </div>
  );
};

export default ProdukList;