import { Button } from '@/components/ui/button';
import { MapPin, Clock, Wifi } from 'lucide-react';
import cafeHero from '@/assets/cafe-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16 md:pt-18 lg:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cafeHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-3 sm:px-4 md:px-6 max-w-5xl mx-auto">
        {/* Decorative Coffee Bean */}
        <div className="absolute -top-8 sm:-top-12 md:-top-16 left-1/2 transform -translate-x-1/2 opacity-20">
          <div className="w-6 h-9 sm:w-8 sm:h-12 bg-accent rounded-full rotate-12 coffee-steam animate-float"></div>
        </div>
        
        <h1 className="font-playfair text-yellow-100 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
          Where every 
          <span className="block font-dancing text-accent text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl -mt-1 sm:-mt-2 mb-1 sm:mb-2">bite & sip</span>
          <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">feels like home</span>
        </h1>
        
        <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-slide-in-left text-muted-foreground">
          Experience Kigali's coziest café with strong Wi-Fi, friendly service, and beautiful terrace views
        </p>
        
        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 sm:mb-8 animate-slide-in-right">
          <div className="flex items-center bg-card/80 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 hover-lift border border-border">
            <Wifi className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2 text-accent" />
            <span className="font-medium font-inter text-xs sm:text-sm md:text-base text-foreground">Strong Wi-Fi</span>
          </div>
          <div className="flex items-center bg-card/80 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 hover-lift border border-border">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2 text-accent" />
            <span className="font-medium font-inter text-xs sm:text-sm md:text-base text-foreground">Beautiful Terrace</span>
          </div>
          <div className="flex items-center bg-card/80 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 hover-lift border border-border">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2 text-accent" />
            <span className="font-medium font-inter text-xs sm:text-sm md:text-base text-foreground">7:30 - 23:00 Daily</span>
          </div>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in max-w-sm sm:max-w-md mx-auto" style={{ animationDelay: '0.5s' }}>
          <Button 
            size="default"
            className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift font-inter font-semibold text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6"
            onClick={() => window.open('https://drive.google.com/file/d/1JlKq7DD127b6hLgztV6aUefriTxR5_aK/view?fbclid=PAZXh0bgNhZW0CMTEAAad0K9NmHV9K0AcrfCbNKToUEPrzURTWm0mqiaOLm0ih63n_tIzKuoSNMYjQYQ_aem_vsjUZO9u-ZeHL0kcC3yvyQ', '_blank')}
          >
            View Full Menu
          </Button>
          <Button 
            size="default"
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift font-inter font-semibold text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Table
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;