
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface CallButtonProps {
  darkMode?: boolean;
  slideText?: string;
}

const CallButton = ({ darkMode = false, slideText = "Glisser pour appeler" }: CallButtonProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState(0);
  const { toast } = useToast();
  
  // Définir la largeur de la zone de glissement
  const maxDragWidth = 280;
  
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    // Empêcher le comportement par défaut pour les événements tactiles
    if ('touches' in e) e.preventDefault();
  };
  
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    // Calculer la position X pour la souris ou le toucher
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const offsetX = clientX - rect.left;
    
    // Limiter le mouvement entre 0 et maxDragWidth
    const newPosition = Math.max(0, Math.min(offsetX, maxDragWidth));
    setDragPosition(newPosition);
    
    // Vérifier si l'utilisateur a glissé jusqu'au bout
    if (newPosition >= maxDragWidth - 20) {
      handleCall();
      // Réinitialiser la position après un appel réussi
      setDragPosition(0);
      setIsDragging(false);
    }
  };
  
  const handleDragEnd = () => {
    // Si on n'a pas atteint la fin, réinitialiser la position
    if (dragPosition < maxDragWidth - 20) {
      setDragPosition(0);
    }
    setIsDragging(false);
  };
  
  const handleCall = () => {
    // Simuler un appel (pourrait être remplacé par une vraie API d'appel)
    toast({
      title: "Appel en cours",
      description: "Nous vous connectons avec un agent...",
      duration: 5000,
    });
    
    // Ici, vous pourriez implémenter la logique réelle d'appel téléphonique
    setTimeout(() => {
      toast({
        title: "Appel connecté",
        description: "Vous êtes maintenant en communication avec un agent.",
      });
    }, 2000);
  };

  const progressPercentage = (dragPosition / maxDragWidth) * 100;

  return (
    <div className="relative max-w-md mx-auto">
      {/* Fond du slider */}
      <div 
        className={cn(
          "relative h-14 rounded-full overflow-hidden shadow-lg",
          darkMode ? "bg-[#333333]" : "bg-card/80 backdrop-blur-sm border border-border/50"
        )}
        style={{ width: `${maxDragWidth}px` }}
      >
        {/* Texte du slider */}
        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium pl-14 uppercase tracking-wider">
          <div className={cn(
            "flex items-center gap-2",
            darkMode ? "text-gray-300" : "text-foreground/70"
          )}>
            <span className="inline-block transform translate-x-1">→</span>
            {slideText}
          </div>
        </div>
        
        {/* Barre de progression */}
        <div 
          className={cn(
            "absolute top-0 left-0 bottom-0 transition-all",
            darkMode ? "bg-primary/20" : "bg-primary/20"
          )}
          style={{ width: `${progressPercentage}%` }}
        ></div>
        
        {/* Bouton glissable */}
        <div 
          className={cn(
            "absolute top-1 left-1 w-12 h-12 rounded-full flex items-center justify-center cursor-grab transition-transform",
            isDragging && "cursor-grabbing scale-105",
            darkMode ? "bg-primary text-white" : "bg-primary text-primary-foreground"
          )}
          style={{ 
            transform: `translateX(${dragPosition}px)`,
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <Phone className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default CallButton;
