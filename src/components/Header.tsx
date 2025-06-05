
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-forest-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-forest-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-forest-800">EcoDesign</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-forest-700 hover:text-coral-500 transition-colors font-medium">
              Services
            </a>
            <a href="#portfolio" className="text-forest-700 hover:text-coral-500 transition-colors font-medium">
              Portfolio
            </a>
            <a href="#about" className="text-forest-700 hover:text-coral-500 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-forest-700 hover:text-coral-500 transition-colors font-medium">
              Contact
            </a>
            <Button className="bg-coral-500 hover:bg-coral-600 text-white px-6">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-forest-700 hover:text-coral-500 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-forest-200 mt-2 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-forest-700 hover:text-coral-500 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-forest-700 hover:text-coral-500 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="text-forest-700 hover:text-coral-500 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-forest-700 hover:text-coral-500 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-coral-500 hover:bg-coral-600 text-white w-full mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
