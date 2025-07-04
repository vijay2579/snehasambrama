import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Container } from '@/components/Container';
import { Button } from './Button';

const galleryImages = {
  special: [
    { src: '/assets/img/king.jpeg', alt: 'Special Event 1' },
    { src: '/assets/img/king2.jpeg', alt: 'Special Event 2' },
    { src: '/assets/img/king3.jpeg', alt: 'Special Event 3' },
    { src: '/assets/img/mike.jpeg', alt: 'Special Event 4' },
    { src: '/assets/img/sir.jpeg', alt: 'Special Event 5' },
  ],
  community: [
    { src: '/assets/img/camp.jpeg', alt: 'Health Camp' },
    { src: '/assets/img/camp1.jpeg', alt: 'Health Camp 1' },
    { src: '/assets/img/camp2.jpeg', alt: 'Health Camp 2' },
    { src: '/assets/img/c3.jpeg', alt: 'Community Event 1' },
    { src: '/assets/img/c4.jpeg', alt: 'Community Event 2' },
    { src: '/assets/img/c5.jpeg', alt: 'Community Event 3' },
    { src: '/assets/img/c6.jpeg', alt: 'Community Event 4' },
    { src: '/assets/img/girls.jpeg', alt: 'Community Event 5' },
  ],
  events: [
    { src: '/assets/img/stage1.jpeg', alt: 'Stage Event 1' },
    { src: '/assets/img/stage2.jpeg', alt: 'Stage Event 2' },
    { src: '/assets/img/stage3.jpeg', alt: 'Stage Event 3' },
    { src: '/assets/img/stage4.jpeg', alt: 'Stage Event 4' },
    { src: '/assets/img/price.jpeg', alt: 'Stage Event 5' },
  ]
};

function GalleryImage({ image, onClick }) {
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6 bg-white shadow-lg"
      onClick={() => onClick(image)}
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const allImages = [
    ...galleryImages.special.map(img => ({ ...img, category: 'special' })),
    ...galleryImages.community.map(img => ({ ...img, category: 'community' })),
    ...galleryImages.events.map(img => ({ ...img, category: 'events' }))
  ];

  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, 8);

  return (
    <section
      id="gallery"
      aria-label="Our Gallery"
      className="bg-slate-50 py-8 sm:py-20 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 font-bold">
            Our Gallery
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg tracking-tight text-slate-700">
            Capturing moments of impact and community engagement
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-2 sm:gap-4 flex-wrap px-4 sm:px-0">
          <Button
            variant={activeCategory === 'all' ? 'solid' : 'outline'}
            color="green"
            onClick={() => setActiveCategory('all')}
            className="text-sm sm:text-base"
          >
            All
          </Button>
          
          <Button
            variant={activeCategory === 'community' ? 'solid' : 'outline'}
            color="green"
            onClick={() => setActiveCategory('community')}
            className="text-sm sm:text-base"
          >
            Community & Health Camps
          </Button>
          <Button
            variant={activeCategory === 'events' ? 'solid' : 'outline'}
            color="green"
            onClick={() => setActiveCategory('events')}
            className="text-sm sm:text-base"
          >
            Events
          </Button>
          <Button
            variant={activeCategory === 'special' ? 'solid' : 'outline'}
            color="green"
            onClick={() => setActiveCategory('special')}
            className="text-sm sm:text-base"
          >
            Special Moments
          </Button>
        </div>
      </Container>

      <div className="mx-auto mt-8 sm:mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {visibleImages.map((image, index) => (
            <div key={index} className="w-full">
              <GalleryImage image={image} onClick={setSelectedImage} />
            </div>
          ))}
        </div>

        {filteredImages.length > 8 && (
          <div className="mt-8 sm:mt-12 text-center">
            <Button 
              variant="solid" 
              color="green" 
              onClick={() => setShowAll(!showAll)}
              className="text-sm sm:text-base"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full aspect-[4/3]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain rounded-lg"
              priority
            />
            <button 
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-emerald-500"
              onClick={() => setSelectedImage(null)}
            >
              <Icon icon="mdi:close" className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 