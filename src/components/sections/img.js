import React from "react";

export default function Img({ src, fallback, type = "image/webp", alt }) {
  return (
    <picture>
      <source className="img" srcSet={src} type={type} />
      <img className="img" src={fallback} alt={alt} />
    </picture>
  );
}
