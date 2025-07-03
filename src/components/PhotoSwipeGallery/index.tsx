import React, { useEffect, useRef, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

interface PhotoSwipeGalleryProps {
  images: string[];
  thumbnailSize?: number;
  className?: string;
}

const PhotoSwipeGallery: React.FC<PhotoSwipeGalleryProps> = ({
  images,
  thumbnailSize = 300,
  className = '',
}) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<PhotoSwipeLightbox | null>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const lightboxInstance = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      // Configure PhotoSwipe options
      paddingFn: (viewportSize) => {
        return {
          top: 20,
          bottom: 20,
          left: 20,
          right: 20,
        };
      },
    });

    lightboxInstance.init();
    setLightbox(lightboxInstance);

    return () => {
      lightboxInstance.destroy();
    };
  }, []);

  // Generate thumbnail URL from Google Photos URL
  const getThumbnailUrl = (url: string, size: number) => {
    if (url.includes('googleusercontent.com')) {
      // Replace the size parameter in Google Photos URLs
      return url.replace(/=w\d+-h\d+$/, `=w${size}-h${size}`);
    }
    return url;
  };

  // Generate full-size URL from Google Photos URL
  const getFullSizeUrl = (url: string) => {
    if (url.includes('googleusercontent.com')) {
      // Use a large size for full-size display
      return url.replace(/=w\d+-h\d+$/, '=w2048-h2048');
    }
    return url;
  };

  return (
    <div
      ref={galleryRef}
      className={`photoswipe-gallery ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${thumbnailSize}px, 1fr))`,
        gap: '10px',
        margin: '20px 0',
      }}
    >
      {images.map((imageUrl, index) => (
        <a
          key={index}
          href={getFullSizeUrl(imageUrl)}
          data-pswp-width="2048"
          data-pswp-height="2048"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
        >
          <img
            src={getThumbnailUrl(imageUrl, thumbnailSize)}
            alt={`Photo ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
};

export default PhotoSwipeGallery;
