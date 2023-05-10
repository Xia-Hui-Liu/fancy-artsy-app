import Link from "next/link";

const News: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <ul className="text-sm text-center">
        <li className="mb-1">
          <Link href="/news/article1" legacyBehavior>
            <a className="text-gray-600 hover:text-black text-xl">Fancy-artsy just lauched</a>
          </Link>
        </li>
        <li className="mb-1">
          <Link href="/news/article2" legacyBehavior>
            <a className="text-gray-600 hover:text-black text-xl mt-20">Epoxy Resin Supplier</a>
          </Link>
        </li>
        <li className="mb-1">
          <Link href="/news/article3" legacyBehavior>
            <a className="text-gray-600 hover:text-black text-xl mt-20">Epoxy Resin for Arts, Floor and Industrial</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default News;
