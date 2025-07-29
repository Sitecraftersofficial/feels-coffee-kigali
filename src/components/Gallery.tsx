import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import cafeHero from '@/assets/cafe-hero.jpg';
import menuShowcase from '@/assets/menu-showcase.jpg';
import terraceView from '@/assets/terrace-view.jpg';
import coffeeBeans from '@/assets/coffee-beans.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: cafeHero,
      alt: 'Feels Coffee Interior',
      category: 'Interior'
    },
    {
      src: menuShowcase,
      alt: 'Coffee and Pastries',
      category: 'Food & Drinks'
    },
    {
      src: terraceView,
      alt: 'Beautiful Terrace View',
      category: 'Outdoor Seating'
    },
    {
      src: coffeeBeans,
      alt: 'Fresh Rwandan Coffee Beans',
      category: 'Coffee'
    },
    {
      src: cafeHero,
      alt: 'Cozy Seating Area',
      category: 'Interior'
    },
    {
      src: menuShowcase,
      alt: 'Signature Drinks',
      category: 'Food & Drinks'
    },
    {
      src: terraceView,
      alt: 'Outdoor Dining Experience',
      category: 'Outdoor Seating'
    },
    {
      src: coffeeBeans,
      alt: 'Local Coffee Sourcing',
      category: 'Coffee'
    },
    {
      src: cafeHero,
      alt: 'Laptop-Friendly Workspace',
      category: 'Work Environment'
    }
  ];

  const categories = ['All', 'Interior', 'Food & Drinks', 'Outdoor Seating', 'Coffee', 'Work Environment'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through Feels Coffee - from our cozy interiors to our delicious offerings 
            and the beautiful atmosphere that makes us special.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              size="sm"
              className={`text-xs sm:text-sm transition-all duration-200 ${
                activeCategory === category 
                  ? "bg-primary text-primary-foreground shadow-warm" 
                  : "hover:scale-105 hover:shadow-coffee"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden cursor-pointer hover:shadow-warm transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-primary-foreground">
                      <p className="font-semibold group-hover:text-yellow-50">{image.alt}</p>
                      <p className="text-sm opacity-90 group-hover:text-yellow-50/70">{image.category}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh]">
              <Button
                variant="outline"
                size="icon"
                className="absolute -top-12 right-0 text-foreground border-border hover:bg-secondary hover:text-foreground"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-warm p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Experience it Yourself
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Pictures can only tell part of the story. Come visit us and experience the warm atmosphere, 
              delicious food, and exceptional coffee that makes Feels Coffee special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary text-primary-foreground hover:shadow-warm hover:scale-105 transition-all duration-200"
                onClick={() => window.open('https://drive.google.com/file/d/1JlKq7DD127b6hLgztV6aUefriTxR5_aK/view?fbclid=PAZXh0bgNhZW0CMTEAAad0K9NmHV9K0AcrfCbNKToUEPrzURTWm0mqiaOLm0ih63n_tIzKuoSNMYjQYQ_aem_vsjUZO9u-ZeHL0kcC3yvyQ', '_blank')}
              >
                View Our Menu
              </Button>
              <Button 
                variant="outline"
                className="hover:scale-105 hover:shadow-coffee transition-all duration-200"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Make a Reservation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;