import Image from "next/image"
import Link from "next/link"

const Footer : React.FC = () => {
    return (
        <footer className="mt-20 text-center py-4 bg-white my-0">
                <div className="flex justify-center space-x-4 mb-8">
                    <a href="https://www.facebook.com/fancyartsy82/">
                        <Image src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook" width={40} height={40} />
                    </a>
                    <a href="https://www.instagram.com/">
                        <Image src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram" width={40} height={40} />
                    </a>
                    <a href="https://twitter.com/">
                        <Image src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twitter" width={40} height={40} />
                    </a>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <Link legacyBehavior href="/">
                        <a className="text-lg font-medium text-gray-600 hover:text-gray-900">Home</a>
                    </Link>
                    <Link legacyBehavior href="/products">
                        <a className="text-lg font-medium text-gray-600 hover:text-gray-900">Products</a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                        <a className="text-lg font-medium text-gray-600 hover:text-gray-900">Contact Us</a>
                    </Link>
                </div>
                <p className="text-gray-600 text-center">© 2023 Fancy Artsy. All rights reserved.</p>
            </footer>
    )
}

export default Footer