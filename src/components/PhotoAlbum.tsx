"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const PhotoAlbum: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const imageList = [
    '/images/IMG1.JPG',
    '/images/IMG2.JPG',
    '/images/IMG3.JPG',
    '/images/IMG4.JPG',
    '/images/IMG5.JPG',
    '/images/IMG6.JPG'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedImage((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [imageList.length]);

  return (
    <div className="relative h-96 w-screen overflow-hidden my-0 p-0">
      {imageList.map((image, index) => (
        <div
          key={image}
          className={`absolute top-0 left-0 w-full h-full ${
            selectedImage === index ? "flash" : "opacity-0"
          }`}
        >
          <Image
            key={image}
            src={image}
            alt={`Gallery Image ${index}`}
            layout="fill"
            objectFit="cover"
            className={`absolute top-0 ${
              selectedImage === index ? "flash" : "opacity-0"
            } max-w-full relative transition-none transform -translate-x-1128`}
            onClick={() => console.log(`Image ${index} clicked`)}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoAlbum;
