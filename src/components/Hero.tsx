import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import LogoSlider from './LogoSlider';
const Hero = () => {
  return <section className="pt-32 pb-16 md:pt-40 md:pb-24 py-[100px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter relative">
              Transformez vos <span className="relative inline-block">
                <span className="text-primary font-extrabold relative z-10">équipes commerciales</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 rounded-full -z-0 transform -rotate-1"></span>
              </span> en machines à résultats
            </h1>
            <p className="text-xl text-foreground/80 max-w-xl">Des solutions innovantes pour recruter, former et optimiser les performances de vos agents commerciaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary" size="lg">
                Découvrir nos services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Prendre rendez-vous
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Équipe commerciale en action" className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 rounded-lg shadow-lg p-4 border border-border bg-white">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center font-bold shadow-md rounded-lg bg-black text-white px-[54px]">
                  <span className="text-2xl">+142%</span>
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Augmentation moyenne</p>
                  <p className="font-semibold">du taux de conversion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <LogoSlider />
        </div>
      </div>
    </section>;
};
export default Hero;