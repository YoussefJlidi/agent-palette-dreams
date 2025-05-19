
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="heading-lg mb-6">Prêt à transformer votre force de vente?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-lg">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider à atteindre vos objectifs commerciaux.
            </p>
            
            <div className="space-y-6 max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="text" 
                  placeholder="Votre nom" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/50 text-primary-foreground"
                />
                <Input 
                  type="email" 
                  placeholder="Votre email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/50 text-primary-foreground"
                />
              </div>
              
              <div>
                <Input 
                  type="text" 
                  placeholder="Votre entreprise" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/50 text-primary-foreground"
                />
              </div>
              
              <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Demander une démo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-xs text-primary-foreground/70 text-center">
                En soumettant ce formulaire, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
              </p>
            </div>
          </div>
          
          <div className="lg:order-first animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="bg-primary-foreground/5 p-8 rounded-xl border border-primary-foreground/10 relative">
              <div className="absolute -top-4 -right-4 bg-chart-1 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Nouveau programme
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Programme d'excellence commerciale</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-chart-3 mr-2">✓</span>
                  <span>Évaluation complète de votre équipe actuelle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chart-3 mr-2">✓</span>
                  <span>Plan de recrutement stratégique personnalisé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chart-3 mr-2">✓</span>
                  <span>Formation intensive aux techniques de vente avancées</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chart-3 mr-2">✓</span>
                  <span>Suivi mensuel des performances avec ajustements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chart-3 mr-2">✓</span>
                  <span>Coaching individuel pour vos top performers</span>
                </li>
              </ul>
              
              <div className="pt-4 border-t border-primary-foreground/10 flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/70 text-sm">À partir de</p>
                  <p className="text-2xl font-bold">2 500€ / mois</p>
                </div>
                <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
