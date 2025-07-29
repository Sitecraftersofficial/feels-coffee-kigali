import { Button } from '@/components/ui/button';
import { MapPin, Clock, Wifi } from 'lucide-react';
import cafeHero from '@/assets/cafe-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cafeHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        {/* Decorative Coffee Bean */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-20">
          <div className="w-8 h-12 bg-accent rounded-full rotate-12 coffee-steam animate-float"></div>
        </div>
        
        <h1 className="font-playfair text-5xl md:text-8xl font-bold mb-6 leading-tight animate-fade-in">
          Where every 
          <span className="block font-dancing text-accent-foreground text-6xl md:text-9xl -mt-4 mb-2">bite & sip</span>
          <span className="block text-4xl md:text-6xl">feels like home</span>
        </h1>
        
        <p className="font-inter text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in-left">
          Experience Kigali's coziest café with strong Wi-Fi, friendly service, and beautiful terrace views
        </p>
        
        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-slide-in-right">
          <div className="flex items-center bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 hover-lift">
            <Wifi className="h-5 w-5 mr-2" />
            <span className="font-medium font-inter">Strong Wi-Fi</span>
          </div>
          <div className="flex items-center bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 hover-lift">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="font-medium font-inter">Beautiful Terrace</span>
          </div>
          <div className="flex items-center bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 hover-lift">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-medium font-inter">7:30 - 23:00 Daily</span>
          </div>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift font-inter font-semibold">
            View Full Menu
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-lift font-inter font-semibold">
            Book a Table
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;