import { useState } from 'react';

type ConfigImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

export function ConfigImage({ src, alt, width, height, className }: ConfigImageProps) {
  const [unavailable, setUnavailable] = useState(false);
  const [webpFailed, setWebpFailed] = useState(false);
  const webpSrc = src.startsWith('/') && /\.jpe?g$/i.test(src) ? src.replace(/\.jpe?g$/i, '.webp') : undefined;

  return (
    <div className={`relative overflow-hidden bg-surface-alt ${className}`}>
      {unavailable ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="absolute inset-0 m-auto h-9 w-9 text-fg-muted" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9" r="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m4 17 5-5 3 3 2-2 6 5" />
        </svg>
      ) : (
        <picture key={webpFailed ? 'original' : 'webp'} className="block h-full w-full">
          {webpSrc && !webpFailed && <source srcSet={webpSrc} type="image/webp" />}
          <img
            className="h-full w-full object-cover"
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            onError={() => {
              if (webpSrc && !webpFailed) {
                setWebpFailed(true);
                return;
              }
              setUnavailable(true);
            }}
          />
        </picture>
      )}
    </div>
  );
}
