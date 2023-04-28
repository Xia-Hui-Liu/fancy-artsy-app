"use client"
import Link from "next/link";
import Image from "next/image";
import productsData from "../../data/products.json";

interface Product {
  id: number;
  name: string;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = () => {
  const handleCardHover = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = event.currentTarget;
    card.style.transform = "translateY(-20px)";
  };

  const handleCardLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = event.currentTarget;
    card.style.transform = "translateY(0)";
  };

  return (
    <div className="py-10 mt-40">
      <h2 className="text-center text-xl tracking-tight text-gray-900 sm:text-2xl" style={{ textDecoration: "underline" }}>Products</h2>
      <div className="flex justify-center py-4 mt-10">
        {productsData.map((product) => (
          <div
            className="max-w-xs w-full h-full rounded overflow-hidden shadow-lg m-4 sm:max-w-md sm:w-1/2 md:w-1/3 lg:w-1/4 card"
            key={product.id}
            style={{ flex: "0 0 calc(20% - 1rem)", height: "300px" }}
            onMouseOver={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <Image
              className="w-full h-3/4 object-cover"
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={200}
            />
            <div className="px-6 py-6 h-1/4 ">
              <Link legacyBehavior href={`/products/${product.router}`}>
                <a className="text-base mb-2 text-gray-600 hover:text-gray-200">{product.name}</a>
              </Link>
              <hr></hr>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
