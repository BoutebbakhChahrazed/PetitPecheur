import React, { useState } from 'react';
import { ImageWithFallback } from '../assets/images/ImageWithFallback';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Elegant table setting",
      category: "Ambiance"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Fine dining experience",
      category: "Dining"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Chef at work",
      category: "Kitchen"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Plated dish",
      category: "Cuisine"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Restaurant interior",
      category: "Ambiance"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wine selection",
      category: "Beverages"
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <p className="text-primary text-sm tracking-[0.3em] uppercase">Visual Journey</p>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A glimpse into the artistry and elegance that awaits you at Petit Pêcheur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden aspect-square cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={image.src}

                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-primary text-xs tracking-widest uppercase">
                    {image.category}
                  </span>
                  <p className="text-background mt-2">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-5xl w-full">
            <ImageWithFallback
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="text-center mt-6">
              <p className="text-background text-lg">{galleryImages[selectedImage].alt}</p>
              <p className="text-primary text-sm tracking-wider uppercase mt-2">
                {galleryImages[selectedImage].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
