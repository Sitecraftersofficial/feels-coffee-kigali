import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8" />
              <h3 className="text-2xl font-bold">Feels Coffee</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Where every bite and sip feels like home. Experience Kigali's coziest café with strong Wi-Fi, 
              friendly service, and beautiful terrace views in the heart of Rugando.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/feels_coffeexstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Location & Hours
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  KG-628 St, Rugando, Kigali
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  +250 788 123 456
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  hello@feelscoffee.rw
                </span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-primary-foreground/80 text-sm">
                Monday - Sunday<br />
                7:30 AM - 11:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Feels Coffee Kigali. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;