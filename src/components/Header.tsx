
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return <header className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SP</span>
              </div>
              iapulsion.com
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">Accueil</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors">
                Services <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem>
                  <a href="#recrutement" className="w-full">Recrutement</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#formation" className="w-full">Formation</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#optimisation" className="w-full">Optimisation</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">Témoignages</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              Se connecter
            </Button>
            <Button className="btn-primary shadow-md relative overflow-hidden group">
              <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative">Démarrer</span>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden flex items-center" onClick={toggleMenu} aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-background border-t border-border">
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
