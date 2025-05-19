
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BarChart3, Users, Play, Check } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
const Hero = () => {
  return <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            {/* Badge de mise en avant */}
            <Badge variant="outline" className="px-4 py-1.5 text-sm bg-card/50 backdrop-blur border-border/50 shadow-sm">
              <span className="inline-block mr-2 w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-medium">Déployez des agents commerciaux en 3 clics</span>
            </Badge>
            
            {/* H1 Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text bg-gradient-to-r from-foreground to-foreground/80 text-zinc-950">Boostez vos performances 
grâce aux agents sales</h1>
            
            <p className="text-xl text-foreground/80 max-w-xl">
              Des solutions innovantes pour recruter, former et optimiser les performances de vos agents commerciaux.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="group relative overflow-hidden bg-primary text-primary-foreground" size="lg">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                <span className="relative flex items-center">
                  Découvrir nos services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              
              <Button variant="outline" size="lg" className="group border-border/50 hover:bg-accent/50">
                <Play size={18} className="mr-2 text-primary" />
                <span className="relative">Voir la démo</span>
              </Button>
            </div>
            
            {/* Trust signals */}
            <div className="pt-8">
              <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-4">Ils nous font confiance</p>
              <div className="flex flex-wrap items-center gap-8 opacity-70">
                <div className="h-8 w-24 bg-muted/30 rounded-md flex items-center justify-center text-xs font-bold">LOGO 1</div>
                <div className="h-8 w-24 bg-muted/30 rounded-md flex items-center justify-center text-xs font-bold">LOGO 2</div>
                <div className="h-8 w-24 bg-muted/30 rounded-md flex items-center justify-center text-xs font-bold">LOGO 3</div>
                <div className="h-8 w-24 bg-muted/30 rounded-md flex items-center justify-center text-xs font-bold">LOGO 4</div>
              </div>
            </div>
            
            {/* Stats cards */}
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-card/50 backdrop-blur border-border/40 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Users className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground/70">Clients satisfaits</p>
                      <p className="font-bold text-lg">500+</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur border-border/40 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-chart-2/20">
                      <Award className="text-chart-2 h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground/70">Années d'expertise</p>
                      <p className="font-bold text-lg">15+</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur border-border/40 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-chart-3/20">
                      <BarChart3 className="text-chart-3 h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground/70">Conversion moyenne</p>
                      <p className="font-bold text-lg">+42%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg border border-border/40 bg-card/30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              
              {/* Video thumbnail with play button - Updated with robot on dark background */}
              <div className="relative w-full h-full">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80" alt="Robot passant un appel téléphonique" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-lg hover:bg-primary transition-colors">
                    <Play size={32} fill="currentColor" />
                  </button>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full py-1 px-3 shadow-md border border-border/40">
                <span className="text-xs font-medium">Top équipe commerciale 2023</span>
              </div>
              
              {/* Features list at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-card/80 backdrop-blur-md p-4 border-t border-border/30">
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-sm font-medium">Formation sur mesure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-sm font-medium">Coaching personnalisé</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-sm font-medium">Analyse en temps réel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-sm font-medium">Stratégie sur mesure</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Floating card 1 - Improved readability */}
            <div className="absolute -bottom-6 -left-6 rounded-lg shadow-lg p-4 border border-border/50 bg-card/95 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 flex items-center justify-center text-white font-bold shadow-md rounded-lg bg-primary">+42%</div>
                <div>
                  <p className="text-sm text-foreground/70">Augmentation moyenne</p>
                  <p className="font-semibold">du taux de conversion</p>
                </div>
              </div>
            </div>
            
            {/* Floating card 2 */}
            <div className="absolute -top-6 -right-6 rounded-lg shadow-lg p-4 border border-border/50 bg-card/95 backdrop-blur-sm hidden md:block">
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
      
      <Separator className="mt-24 opacity-30" />
    </section>;
};
export default Hero;
