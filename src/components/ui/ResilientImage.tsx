"use client";

import { useEffect, useState } from "react";

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: "eager" | "lazy";
}

const DEFAULT_FALLBACK = "/images/child-main.webp";

const ResilientImage = ({
  src,
  alt,
  className,
  fallbackSrc = DEFAULT_FALLBACK,
  loading = "lazy",
}: ResilientImageProps) => {
  const [resolvedSrc, setResolvedSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setResolvedSrc(src || fallbackSrc);
  }, [fallbackSrc, src]);

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => {
        if (resolvedSrc !== fallbackSrc) setResolvedSrc(fallbackSrc);
      }}
    />
  );
};

export default ResilientImage;
