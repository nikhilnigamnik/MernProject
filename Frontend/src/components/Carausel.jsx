import React, { useEffect, useState } from "react";

const Carausel = () => {
  const dummyImages = [
    "https://res.cloudinary.com/dtmp7op6k/image/upload/v1687889051/pexels-engin-akyurt-2725744_korpmy.jpg",
    "https://res.cloudinary.com/dtmp7op6k/image/upload/v1687889048/pexels-ella-olsson-1334131_cv2ebg.jpg",
    "https://res.cloudinary.com/dtmp7op6k/image/upload/v1687889046/pexels-taryn-elliott-7172067_yksfxe.jpg",
    "https://res.cloudinary.com/dtmp7op6k/image/upload/v1687889043/pexels-anush-gorak-1431305_cz1ak7.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyImages.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mb-8">
      <img
        className="w-full rounded-2xl"
        src={dummyImages[currentIndex]}
        alt={`Image ${currentIndex}`}
      />
    </div>
  );
};

export default Carausel;
