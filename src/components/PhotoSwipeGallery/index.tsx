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

  const getFullSizeUrl = (url: string, size = 9999) => {
    if (url.includes('googleusercontent.com')) {
      return url.replace(/=w\d+-h\d+$/, `=w${size}-h${size}`);
    }
    return url;
  };

  return (
    <>
      <style>{`
        .photoswipe-gallery {
          column-count: 3;
          column-gap: 5px;
        }

        @media (max-width: 1024px) {
          .photoswipe-gallery {
            column-count: 2;
          }
        }

        @media (max-width: 512px) {
          .photoswipe-gallery {
            column-count: 1;
          }
        }
        .image-link {
          display: block;
          overflow: hidden;
          transition: opacity .135s cubic-bezier(0,0,.2,1);
          box-shadow: none;      
          position: relative;
        }
          
        .image-link:after {
          display: block;
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transition: opacity .135s cubic-bezier(0,0,.2,1);
          opacity: 0;
        }

        .image-link:hover:after {
            opacity: 1;
            background-image: linear-gradient(to bottom, color-mix(in srgb, var(--gm3-sys-color-scrim, #000) 38%, transparent), transparent 56px, transparent);
        }
      `}</style>
      <div
        ref={galleryRef}
        className={`photoswipe-gallery ${className}`}
      >
        {images.map((imageUrl, index) => {
          return (
            <a
              className='image-link'
              key={index}
              href={getFullSizeUrl(imageUrl)}
              data-pswp-width="999"
              data-pswp-height="999"
              style={{
                border: 'none',
              }}
            >
              <img
                src={getFullSizeUrl(imageUrl, 300)}
                alt={`Photo ${index + 1}`}
                style={{
                  width: '100%',
                  margin: 0,
                  borderRadius: 0
                }}
                loading="lazy"
                // this aint working
                onLoad={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  const a = img.parentElement as HTMLAnchorElement;
                  a.setAttribute('data-pswp-width', (img.naturalWidth * 10).toString());
                  a.setAttribute('data-pswp-height', (img.naturalHeight * 10).toString());
                }}
              />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default PhotoSwipeGallery;
