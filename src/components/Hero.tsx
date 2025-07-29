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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Where every bite and sip
          <span className="block text-accent-foreground">feels like home</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience Kigali's coziest café with strong Wi-Fi, friendly service, and beautiful terrace views
        </p>
        
        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center bg-background/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Wifi className="h-5 w-5 mr-2" />
            <span className="font-medium">Strong Wi-Fi</span>
          </div>
          <div className="flex items-center bg-background/20 backdrop-blur-sm rounded-full px-4 py-2">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="font-medium">Beautiful Terrace</span>
          </div>
          <div className="flex items-center bg-background/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-medium">7:30 - 23:00 Daily</span>
          </div>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            View Full Menu
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Book a Table
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;