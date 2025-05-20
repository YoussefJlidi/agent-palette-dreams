
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return <header className="fixed w-full bg-white z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold">iapulsion.com</a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">Accueil</a>
            <a href="#types" className="text-foreground/80 hover:text-foreground transition-colors">Tarification</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">Ressources</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              Se connecter
            </Button>
            <Button className="btn-primary">
              Démarrer
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden flex items-center" onClick={toggleMenu} aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary" onClick={toggleMenu}>
              Services
            </a>
            <a href="#types" className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary" onClick={toggleMenu}>
              Types d'agents
            </a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary" onClick={toggleMenu}>
              Témoignages
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary" onClick={toggleMenu}>
              Contact
            </a>
            <div className="pt-4 pb-3 border-t border-border">
              <Button variant="ghost" className="w-full justify-center mb-2">
                Se connecter
              </Button>
              <Button className="btn-primary w-full justify-center">
                Démarrer
              </Button>
            </div>
          </div>
        </div>}
    </header>;
};

export default Header;
