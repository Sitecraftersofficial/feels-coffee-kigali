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

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location & Hours', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-coffee' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="relative">
              <Coffee className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
              <div className="absolute -top-1 -right-1 w-2 h-3 bg-accent/30 rounded-full animate-steam"></div>
            </div>
            <div>
              <h1 className="font-playfair text-2xl font-bold text-primary">Feels Coffee</h1>
              <p className="font-dancing text-xs text-muted-foreground -mt-1">Kigali</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-inter text-foreground hover:text-primary transition-all duration-200 font-medium story-link"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="bg-gradient-coffee text-primary-foreground hover-lift">
              Book a Table
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 transition-transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-inter text-foreground hover:text-primary transition-colors duration-200 font-medium animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="default" className="bg-gradient-coffee text-primary-foreground w-fit animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                Book a Table
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;