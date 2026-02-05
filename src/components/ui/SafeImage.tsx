"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

// Placeholder-Bild von stark-inspiration.de
const PLACEHOLDER = 'https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg';

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallback?: string;
}

export default function SafeImage({ 
  src, 
  fallback = PLACEHOLDER,
  alt,
  ...props 
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Wenn src mit /images/ beginnt und lokal ist, direkt Placeholder nutzen
  const effectiveSrc = typeof imgSrc === 'string' && imgSrc.startsWith('/images/') && !imgSrc.startsWith('http')
    ? fallback
    : imgSrc;

  return (
    <Image
      {...props}
      src={hasError ? fallback : effectiveSrc}
      alt={alt}
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setImgSrc(fallback);
        }
      }}
    />
  );
}
