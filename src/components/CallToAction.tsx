import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from 'lucide-react';
const CallToAction = () => {
  return <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="heading-lg mb-6">Prêt à transformer votre force de vente?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-lg">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider à atteindre vos objectifs commerciaux.
            </p>
            
            <div className="space-y-6 max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input type="text" placeholder="Votre nom" className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/50 text-primary-foreground" />
                <Input type="email" placeholder="Votre email" className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/50 text-primary-foreground" />
              </div>
              
              <div>
                <Input type="text" placeholder="Votre entreprise" className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/50 text-primary-foreground" />
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
          
          <div className="lg:order-first animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            
          </div>
        </div>
      </div>
    </section>;
};
export default CallToAction;