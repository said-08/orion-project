import Image from "next/image";
import { useState } from "react";

export function getYoutubeEmbedUrl(url) {
  if (!url) return '';
  
  if (url.includes('/embed/')) return url;
  
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  if (match && match[2].length === 11) {
    return `https://www.youtube-nocookie.com/embed/${match[2]}`;
  }
  
  return '';
}

export default function ActivitySection({ title, description, images, videoUrl, mainImageStyles }) {
    const [activeImage, setActiveImage] = useState(0);
    const [showVideo, setShowVideo] = useState(!!videoUrl); // Inicialmente mostrar video si existe
    const embedUrl = getYoutubeEmbedUrl(videoUrl);
  
    // Función para manejar clics en miniaturas
    const handleThumbnailClick = (index) => {
      setActiveImage(index);
      setShowVideo(false); // Cambiar a mostrar imágenes
    };

    // Botón para volver al video
    const handleVideoButtonClick = () => {
      setShowVideo(true);
    };
  
    return (
      <section className="w-full py-10 md:py-12 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">{title}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Media Section */}
            <div className="space-y-4">
              {/* Main Image/Video Display */}
              <div className={`relative w-full aspect-video bg-transparent rounded-lg overflow-hidden ${mainImageStyles}`}>
                {showVideo && embedUrl ? (
                  <iframe 
                    src={embedUrl} 
                    className="w-full h-full object-cover"
                    title={`Video de ${title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  images && images.length > 0 && (
                    <Image
                      src={images[activeImage]}
                      alt={`${title} - imagen ${activeImage + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      fill
                    />
                  )
                )}
              </div>
              
              {/* Thumbnails y botón de video */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {/* Botón para mostrar video (si existe) */}
                {embedUrl && (
                  <button
                    onClick={handleVideoButtonClick}
                    className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                      showVideo ? 'border-accent' : 'border-transparent'
                    }`}
                  >
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3L19 12L5 21V3Z" fill="white"/>
                      </svg>
                    </div>
                  </button>
                )}
                
                {/* Miniaturas de imágenes */}
                {images && images.length > 0 && 
                  images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                        !showVideo && activeImage === index ? 'border-accent' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${title} - miniatura ${index + 1}`}
                        className="object-cover"
                        loading="lazy"
                        fill
                      />
                    </button>
                  ))
                }
              </div>
            </div>
            
            {/* Description Section */}
            <div className="prose prose-lg max-w-none">
              {description.split('\n').map((line, index) => (
                <p 
                  key={index} 
                  className="text-foreground mb-4 last:mb-0"
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }