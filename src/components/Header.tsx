import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Coffee } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location & Hours', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-coffee' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => handleNavClick('#home')}>
            <div className="relative">
              <Coffee className="h-7 w-7 md:h-8 md:w-8 text-primary transition-transform group-hover:rotate-12" />
              <div className="absolute -top-1 -right-1 w-2 h-3 bg-accent/30 rounded-full animate-steam"></div>
            </div>
            <div>
              <h1 className="font-playfair text-xl md:text-2xl font-bold text-primary">Feels Coffee</h1>
              <p className="font-dancing text-xs text-muted-foreground -mt-1 hidden sm:block">Kigali</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="font-inter text-foreground hover:text-primary transition-all duration-200 font-medium story-link"
              >
                {item.name}
              </button>
            ))}
            <Button 
              variant="default" 
              className="bg-gradient-coffee text-primary-foreground hover-lift font-inter font-semibold"
              onClick={() => handleNavClick('#contact')}
            >
              Book a Table
            </Button>
          </nav>

          {/* Mobile Menu Button - Show on medium screens too */}
          <button
            className="lg:hidden p-2 transition-transform hover:scale-110 rounded-md hover:bg-secondary/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 md:top-20 bg-background/98 backdrop-blur-md z-40 border-t border-border">
            <nav className="px-4 py-8 space-y-6 h-full overflow-y-auto">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left font-inter text-base text-foreground hover:text-primary hover:bg-secondary/30 transition-all duration-200 font-medium py-3 px-2 rounded-lg animate-slide-in-left hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                variant="default" 
                className="w-full bg-gradient-coffee text-primary-foreground font-inter font-semibold animate-slide-in-left mt-8 hover:shadow-warm hover:scale-105 transition-all duration-200" 
                style={{ animationDelay: '0.6s' }}
                onClick={() => handleNavClick('#contact')}
              >
                Book a Table
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;