import Link from 'next/link'

const ProductsDropdown: React.FC = () => {
    return (
      <div className="absolute top-14 left-0 bg-white w-full z-50 py-2">
        <div className="container mx-auto">
          <ul className="list-reset">
            <li>
              <Link legacyBehavior href="/products/Art-and-decoration">
                <a className="text-gray-600 hover:text-gray-800 py-2 px-4 block whitespace-no-wrap">Art and decoration</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/products/Deep-pour-resin">
                <a className="text-gray-600 hover:text-gray-800 py-2 px-4 block whitespace-no-wrap">Deep pour resin</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/products/Floor-resin">
                <a className="text-gray-600 hover:text-gray-800 py-2 px-4 block whitespace-no-wrap">Floor resin</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/products/Industrial-resin">
                <a className="text-gray-600 hover:text-gray-800 py-2 px-4 block whitespace-no-wrap">Industrial resin</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
        );
        };
  
  export default ProductsDropdown;