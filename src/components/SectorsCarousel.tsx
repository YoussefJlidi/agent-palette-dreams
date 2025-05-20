
import React from 'react';
import { Building2, ShoppingBag, Hospital, Factory, PanelTop, School, Car, Briefcase } from 'lucide-react';

interface SectorProps {
  icon: React.ReactNode;
  name: string;
}

const SectorsCarousel = () => {
  const sectors: SectorProps[] = [
    { icon: <Hospital className="h-6 w-6" />, name: "Médical" },
    { icon: <Factory className="h-6 w-6" />, name: "Industrie" },
    { icon: <ShoppingBag className="h-6 w-6" />, name: "E-commerce" },
    { icon: <PanelTop className="h-6 w-6" />, name: "High-tech" },
    { icon: <School className="h-6 w-6" />, name: "Éducation" },
    { icon: <Car className="h-6 w-6" />, name: "Automobile" },
    { icon: <Briefcase className="h-6 w-6" />, name: "Finance" },
    { icon: <Building2 className="h-6 w-6" />, name: "Immobilier" },
  ];

  return (
    <section className="py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="heading-lg mb-6">Tous nos secteurs d'intervention</h2>
          <p className="text-white/80 text-lg">
            Notre expertise s'adapte à tous les secteurs d'activité pour des solutions commerciales sur mesure
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in hover:bg-white/10 transition-all cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                {sector.icon}
              </div>
              <h3 className="font-semibold text-lg">{sector.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/60 italic">
            Et bien d'autres secteurs. Contactez-nous pour discuter de votre projet spécifique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectorsCarousel;
