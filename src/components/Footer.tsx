import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full text-center py-2 mb-0 md:mb-5 bg-white md:h-24">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="https://www.facebook.com/fancyartsy82/" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook" width={40} height={40} />
        </a>
        <a href="https://instagram.com/fancyartsysh?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram" width={40} height={40} />
        </a>
        <a href="https://www.youtube.com/channel/UCe2OkUWHTCd1rQ_jyG8rv-w" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="youtube" width={40} height={40} />
        </a>
      </div>
      <div className="flex justify-center space-x-4 mb-1">
        <Link legacyBehavior href="/">
          <a className="text-lg font-medium text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Home</a>
        </Link>
        <Link legacyBehavior href="/products">
          <a className="text-lg font-medium text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Products</a>
        </Link>
        <Link legacyBehavior href="/contact">
          <a className="text-lg font-medium text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Contact Us</a>
        </Link>
      </div>
      <p className="text-gray-600 text-center">© 2023 Fancy Artsy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
