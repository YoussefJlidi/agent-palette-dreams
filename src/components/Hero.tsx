
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BarChart3, Users } from 'lucide-react';

const Hero = () => {
  return <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-8 animate-fade-in">
            {/* Badge de mise en avant */}
            <div className="inline-flex items-center rounded-full border border-border bg-background/80 px-3 py-1 text-sm shadow-sm backdrop-blur">
              <span className="hidden sm:inline-block rounded-full bg-primary w-2 h-2 mr-2"></span>
              <span className="font-medium">Numéro 1 des solutions commerciales en France</span>
            </div>
            
            <h1 className="heading-xl relative">
              Transformez vos <span className="relative inline-block">
                <span className="text-primary font-bold relative z-10">équipes commerciales</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 rounded-full -z-0 transform -rotate-1"></span>
              </span> en machines à résultats
            </h1>
            <p className="text-xl text-foreground/80 max-w-xl">
              Des solutions innovantes pour recruter, former et optimiser les performances de vos agents commerciaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary group relative overflow-hidden" size="lg">
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center">
                  Découvrir nos services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button variant="outline" size="lg" className="group">
                <span className="relative flex items-center">
                  Prendre rendez-vous
                </span>
              </Button>
            </div>
            
            {/* Stats cards */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Users className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Clients satisfaits</p>
                    <p className="font-bold text-lg">500+</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-chart-2/20">
                    <Award className="text-chart-2 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Années d'expertise</p>
                    <p className="font-bold text-lg">15+</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-chart-3/20">
                    <BarChart3 className="text-chart-3 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Conversion moyenne</p>
                    <p className="font-bold text-lg">+42%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl border border-border/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Équipe commerciale en action" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full py-1 px-3 shadow-md border border-border/40">
                <span className="text-xs font-medium">Top équipe commerciale 2023</span>
              </div>
            </div>
            
            {/* Floating card 1 */}
            <div className="absolute -bottom-6 -left-6 rounded-lg shadow-lg p-4 border border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center text-white font-bold shadow-md rounded-lg bg-primary">+42%</div>
                <div>
                  <p className="text-sm text-foreground/70">Augmentation moyenne</p>
                  <p className="font-semibold">du taux de conversion</p>
                </div>
              </div>
            </div>
            
            {/* Floating card 2 */}
            <div className="absolute -top-6 -right-6 rounded-lg shadow-lg p-4 border border-border bg-card hidden md:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-chart-1 border-2 border-background flex items-center justify-center text-white font-medium text-xs shadow-sm">
                    SG
                  </div>
                  <div className="w-8 h-8 rounded-full bg-chart-2 border-2 border-background flex items-center justify-center text-white font-medium text-xs shadow-sm">
                    TM
                  </div>
                  <div className="w-8 h-8 rounded-full bg-chart-3 border-2 border-background flex items-center justify-center text-white font-medium text-xs shadow-sm">
                    BP
                  </div>
                </div>
                <p className="text-sm">
                  <span className="font-semibold">+32</span> nouveaux agents
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
