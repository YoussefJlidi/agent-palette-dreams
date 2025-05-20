
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Débutant",
      price: "199€",
      description: "Idéal pour les petites entreprises qui démarrent",
      features: [
        "1 agent commercial",
        "5h d'appels par mois",
        "Support par email",
        "Rapports mensuels",
        "1 formation incluse"
      ]
    },
    {
      name: "Business",
      price: "499€",
      description: "Pour les entreprises en pleine croissance",
      features: [
        "3 agents commerciaux",
        "20h d'appels par mois",
        "Support prioritaire",
        "Rapports hebdomadaires",
        "3 formations incluses",
        "Intégration CRM basique"
      ],
      popular: true
    },
    {
      name: "Sur Mesure",
      description: "Solution personnalisée pour les grands comptes",
      features: [
        "Nombre d'agents illimité",
        "Volume d'appels adapté à vos besoins",
        "Support dédié 24/7",
        "Rapports personnalisés",
        "Formations sur mesure",
        "Intégration CRM avancée",
        "Stratégie commerciale dédiée"
      ],
      custom: true
    }
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Nos tarifs</h2>
          <p className="text-foreground/80 text-lg">
            Des formules adaptées à tous les besoins et toutes les tailles d'entreprise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`animate-fade-in border-2 ${
                tier.popular ? "border-black" : "border-border"
              } ${tier.custom ? "bg-black text-white" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                  Populaire
                </div>
              )}
              
              <CardHeader>
                <CardTitle className={`text-2xl font-bold ${tier.custom ? "text-white" : ""}`}>
                  {tier.name}
                </CardTitle>
                <CardDescription className={tier.custom ? "text-white/90" : ""}>
                  {tier.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {tier.price && (
                  <div className="mb-6">
                    <span className={`text-3xl font-bold ${tier.custom ? "text-white" : ""}`}>
                      {tier.price}
                    </span>
                    <span className={`text-sm ${tier.custom ? "text-white/70" : "text-foreground/70"}`}>
                      /mois
                    </span>
                  </div>
                )}
                
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mr-2 mt-1 ${tier.custom ? "text-white" : "text-primary"}`}>
                        <Check className="h-4 w-4" />
                      </span>
                      <span className={tier.custom ? "text-white/90" : ""}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full bg-black hover:bg-black/90 text-white ${
                    tier.custom ? "border-white" : ""
                  }`}
                  variant="outline"
                >
                  {tier.custom ? "Discuter avec notre agent" : "Commencer"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
