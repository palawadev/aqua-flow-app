import Image from "next/image";

interface Produk {
  id: number;
  title: string;
  price: string;
  description: string;
}

interface ProdukItemProps {
  image: string;
  title: string;
  products: Produk[];
}

const ProdukItem: React.FC<ProdukItemProps> = ({ image, title, products }) => {
  return (
    <div className="border p-6 rounded-lg shadow-md my-4 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="text-blue-500 hover:text-blue-700">
          Lihat Detail
        </button>
      </div>
      <div className="flex object-cover rounded-lg mr-4">
        <div className="mr-4">
          <Image src={image} alt={title} width={210} height={0} />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">{product.title}</h3>
                <p className="opacity-80 mb-1">{product.price}</p>
                <p className="opacity-50 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdukItem;
