import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border text-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-coffee"></div>
      <div className="absolute -top-8 -right-8 opacity-10">
        <Coffee className="w-32 h-32 animate-float" />
      </div>
      <div className="absolute -bottom-8 -left-8 opacity-10">
        <Coffee className="w-24 h-24 animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <Coffee className="h-10 w-10 transition-transform group-hover:rotate-12" />
                <div className="absolute -top-2 -right-2 w-3 h-4 bg-accent/30 rounded-full animate-steam"></div>
              </div>
              <div>
                <h3 className="font-playfair text-3xl font-bold">Feels Coffee</h3>
                <p className="font-dancing text-lg opacity-80 -mt-1">Kigali</p>
              </div>
            </div>
            <p className="font-inter text-muted-foreground leading-relaxed mb-6 max-w-md">
              Where every bite and sip feels like home. Experience Kigali's coziest café with strong Wi-Fi, 
              friendly service, and beautiful terrace views in the heart of Rugando.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/feels_coffeexstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-all duration-300 hover-lift group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-all duration-300 hover-lift group"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-all duration-300 hover-lift group"
              >
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent animate-pulse-slow" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="font-inter text-muted-foreground hover:text-foreground transition-colors story-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="font-inter text-muted-foreground hover:text-foreground transition-colors story-link">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="font-inter text-muted-foreground hover:text-foreground transition-colors story-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="font-inter text-muted-foreground hover:text-foreground transition-colors story-link">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="font-inter text-muted-foreground hover:text-foreground transition-colors story-link">
                  Location & Hours
                </a>
              </li>
              <li>
                <a href="#contact" className="font-inter text-muted-foreground hover:text-foreground transition-colors story-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors mt-1" />
                <span className="font-inter text-muted-foreground text-sm leading-relaxed">
                  KG-628 St, Rugando, Kigali
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                <span className="font-inter text-muted-foreground text-sm">
                  +250 788 123 456
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                <span className="font-inter text-muted-foreground text-sm">
                  hello@feelscoffee.rw
                </span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-muted/50 rounded-lg backdrop-blur-sm">
              <h5 className="font-playfair font-semibold mb-3 text-accent">Business Hours</h5>
              <p className="font-inter text-muted-foreground text-sm">
                <span className="font-dancing text-lg block">Every Day</span>
                <span className="font-bold">7:30 AM - 11:00 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Feels Coffee Kigali. All rights reserved.
            </p>

           <p className="font-dancing text-accent mx-2">
              Made with ❤️ in Rwanda by the{" "}
              <a 
                href="https://www.sitecraftersz.co/" 
                className="underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Sitecrafters Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;