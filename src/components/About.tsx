"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

type AboutProps = {
  isHomePage: boolean;
};

const About: React.FC<AboutProps> = ({ isHomePage }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full md:w-3/4 p-8 mx-auto">
      <Link legacyBehavior href="/about">
        <h2 className="text-center justify-center text-xl tracking-tight text-gray-900 sm:text-xl mb-10 hover:text-indigo-500" style={{ textDecoration: "underline" }}>
          About Us
        </h2>
      </Link>
      {isHomePage ? (
        <div className="text-center">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl">
            Shanghai Fancy Technology Co. Ltd. is a leading manufacturer and supplier of high-quality epoxy resins. Our product portfolio includes casting resin, deep pour resin, floor resin, craft resin, and industrial......
          </p>
          <Link legacyBehavior href="/about">
            <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
            Learn More &rarr;
            </a>
          </Link>
        </div>
      ) : (
        <p className="text-sm md:text-base lg:text-lg xl:text-xl">
          Shanghai Fancy Technology Co. Ltd. is a leading manufacturer and supplier of high-quality epoxy resins. Our product portfolio includes casting resin, deep pour resin, floor resin, craft resin, and industrial resin. We specialize in developing and producing customized epoxy resins that meet the unique needs and specifications of our customers.

          Our resins are used in a wide range of applications, from art and crafts to industrial manufacturing. We serve customers in various industries, including automotive, construction, electronics, and woodworking. Our goal is to provide our customers with the best possible solutions and the highest level of customer service.

          At Shanghai Fancy Technology Co. Ltd., we are committed to innovation, quality, and sustainability. We use only the best materials and production processes to ensure that our resins meet the highest standards of performance and durability. Our resins are also eco-friendly and safe to use, making them an ideal choice for customers who care about the environment.

          We are proud to serve customers around the world, with a focus on the American, European, South Asian, and North African markets. Our team of experienced professionals is dedicated to meeting our customers needs and exceeding their expectations. Contact us today to learn more about our products and services.
        </p>
      )}
    </div>
  );
};

export default About;
