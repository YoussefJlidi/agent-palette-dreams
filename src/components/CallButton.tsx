
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const CallButton = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState(0);
  const { toast } = useToast();
  
  // Définir la largeur de la zone de glissement
  const maxDragWidth = 200;
  
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

  return (
    <div className="relative max-w-md mx-auto">
      {/* Fond du slider */}
      <div 
        className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-full h-14 relative overflow-hidden shadow-lg"
        style={{ width: `${maxDragWidth}px` }}
      >
        {/* Texte du slider */}
        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-foreground/70 pl-14">
          Glisser pour appeler
        </div>
        
        {/* Barre de progression */}
        <div 
          className="absolute top-0 left-0 bottom-0 bg-primary/20 transition-all"
          style={{ width: `${dragPosition}px` }}
        ></div>
        
        {/* Bouton glissable */}
        <div 
          className={cn(
            "absolute top-1 left-1 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center cursor-grab transition-transform",
            isDragging && "cursor-grabbing scale-105"
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
