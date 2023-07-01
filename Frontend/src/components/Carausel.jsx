import React, { useEffect, useState } from "react";

const Carausel = () => {
  const dummyImages = [
    "https://res.cloudinary.com/dtmp7op6k/image/upload/v1688240984/pexels-ella-olsson-1334131_qepamm.jpg",
    "https://res.cloudinary.com/dtmp7op6k/image/upload/v1688240983/pexels-engin-akyurt-2725744_z2qfsq.jpg",
    "https://res.cloudinary.com/dtmp7op6k/image/upload/v1688240983/pexels-taryn-elliott-7172067_o9kziz.jpg",
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
