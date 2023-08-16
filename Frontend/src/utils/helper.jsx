import React, { useState } from "react";

export const Img = ({ src, alt, width, height }) => {
  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div>
      <img
        width={width}
        height={height}
        className={`transition-all ${loaded ? "blur-0" : "blur-md"}`}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
      />
    </div>
  );
};
