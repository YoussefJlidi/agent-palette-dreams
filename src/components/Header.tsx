
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-background/90 backdrop-blur-lg z-50 border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center shadow-inner relative overflow-hidden group">
                <span className="text-primary-foreground font-bold text-sm relative z-10">SP</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">iapulsion.com</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">Accueil</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors font-medium">
                Services <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-card/95 backdrop-blur-md border border-border/50 shadow-lg rounded-lg p-1 w-48">
                <DropdownMenuItem className="rounded-md transition-colors focus:bg-accent hover:bg-accent">
                  <a href="#recrutement" className="w-full py-1">Recrutement</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-md transition-colors focus:bg-accent hover:bg-accent">
                  <a href="#formation" className="w-full py-1">Formation</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-md transition-colors focus:bg-accent hover:bg-accent">
                  <a href="#optimisation" className="w-full py-1">Optimisation</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors font-medium">Témoignages</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium">
              Se connecter
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md font-medium relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Démarrer</span>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Collapsible open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border/40 shadow-lg">
                <div className="p-4 space-y-4">
                  <a href="#" className="block p-2 rounded-md text-foreground hover:bg-accent transition-colors">
                    Accueil
                  </a>
                  <a href="#services" className="block p-2 rounded-md text-foreground hover:bg-accent transition-colors">
                    Services
                  </a>
                  <a href="#testimonials" className="block p-2 rounded-md text-foreground hover:bg-accent transition-colors">
                    Témoignages
                  </a>
                  <a href="#contact" className="block p-2 rounded-md text-foreground hover:bg-accent transition-colors">
                    Contact
                  </a>
                  
                  <div className="pt-4 pb-2 border-t border-border/40 space-y-3">
                    <Button variant="outline" className="w-full justify-center">
                      Se connecter
                    </Button>
                    <Button className="w-full justify-center">
                      Démarrer
                    </Button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
