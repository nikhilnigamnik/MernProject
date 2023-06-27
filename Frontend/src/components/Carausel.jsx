import React, { useEffect, useState } from "react";

const Carausel = () => {
  const dummyImages = [
    "https://res.cloudinary.com/dtmp7op6k/image/upload/v1687524896/product-images/vr3hxrcktximut0ocswz.webp",
    "https://res.cloudinary.com/dtmp7op6k/image/upload/v1687525681/product-images/jd9sc7hj7fvmlzjqiodj.webp",
    "https://res.cloudinary.com/dtmp7op6k/image/upload/v1687526149/product-images/tubirwmpogxon25slgyv.webp",
    "https://res.cloudinary.com/dtmp7op6k/image/upload/v1687526179/product-images/kumemkncfxwx9znkasyl.webp",
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
    <div className="">
      <img
        className="w-full rounded-2xl"
        src={dummyImages[currentIndex]}
        alt={`Image ${currentIndex}`}
      />
    </div>
  );
};

export default Carausel;
