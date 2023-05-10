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
    <div className="mt-16">
      <Link legacyBehavior href='/products'>
        <h2 className="text-center text-xl tracking-tight text-gray-900 sm:text-2xl hover:text-indigo-500" style={{ textDecoration: "underline" }}>Products</h2>
      </Link>
      <div className="flex flex-wrap justify-center mt-10 py-2">
        {productsData.map((product) => (
          <div
            className="w-full px-2 mb-4 md:w-1/2 lg:w-1/4"
            key={product.id}
          >
            <div
              className="max-w-sm w-full h-full rounded overflow-hidden shadow-lg m-auto card"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
