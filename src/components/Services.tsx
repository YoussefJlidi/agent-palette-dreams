
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronRight, Users, BookOpen, BarChart3, Clock, PuzzleIcon, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "recrutement",
      title: "Recrutement d'agents commerciaux",
      description: "Identification et sélection des meilleurs talents commerciaux adaptés à votre secteur d'activité et à votre culture d'entreprise.",
      icon: Users,
      color: "primary",
      features: [
        "Analyse de vos besoins spécifiques",
        "Sélection rigoureuse des candidats",
        "Intégration personnalisée",
        "Suivi de performance"
      ]
    },
    {
      id: "formation",
      title: "Formation et développement",
      description: "Programmes de formation sur mesure pour développer les compétences de vos équipes et maximiser leur efficacité sur le terrain.",
      icon: BookOpen,
      color: "chart-2",
      features: [
        "Formations adaptées à votre secteur",
        "Ateliers pratiques réguliers",
        "Supports pédagogiques innovants",
        "Évaluation des acquis"
      ]
    },
    {
      id: "optimisation",
      title: "Analyse des performances",
      description: "Outils et méthodes pour suivre, analyser et optimiser les performances de vos équipes commerciales en temps réel.",
      icon: BarChart3,
      color: "chart-3",
      features: [
        "Tableaux de bord personnalisés",
        "Indicateurs clés de performance",
        "Analyses comparatives",
        "Recommandations d'amélioration continue"
      ]
    },
    {
      id: "coaching",
      title: "Coaching personnalisé",
      description: "Accompagnement individuel de vos commerciaux pour développer leur potentiel et surmonter les obstacles spécifiques.",
      icon: Clock,
      color: "chart-4",
      features: [
        "Séances individuelles régulières",
        "Objectifs clairs et mesurables",
        "Suivi des progrès",
        "Adaptation aux besoins individuels"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <Badge variant="outline" className="px-4 py-1.5 mb-6 bg-card/50 backdrop-blur">
            Nos solutions
          </Badge>
          <h2 className="heading-lg mb-4">Transformez votre force commerciale</h2>
          <p className="text-foreground/80 text-lg">
            Nous accompagnons les entreprises à chaque étape du cycle de vie commercial, du recrutement à l'optimisation des performances.
          </p>
        </div>
        
        {/* Service accordion panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {services.slice(0, 2).map((service) => (
                <AccordionItem 
                  key={service.id} 
                  value={service.id}
                  className="border border-border/40 rounded-lg mb-4 overflow-hidden bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
                >
                  <AccordionTrigger className="px-6 py-4 flex items-center hover:bg-accent/50 hover:no-underline">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-md bg-${service.color}/10 flex items-center justify-center mr-4`}>
                        <service.icon className={`text-${service.color} h-5 w-5`} />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pt-2 pb-4">
                      <p className="text-foreground/70 mb-4">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mt-1 mr-3 rounded-full p-1 bg-primary/10">
                              <Check size={14} className="text-primary" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Button className="group" variant="outline">
                          <span>En savoir plus</span>
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {services.slice(2, 4).map((service) => (
                <AccordionItem 
                  key={service.id} 
                  value={service.id}
                  className="border border-border/40 rounded-lg mb-4 overflow-hidden bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
                >
                  <AccordionTrigger className="px-6 py-4 flex items-center hover:bg-accent/50 hover:no-underline">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-md bg-${service.color}/10 flex items-center justify-center mr-4`}>
                        <service.icon className={`text-${service.color} h-5 w-5`} />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pt-2 pb-4">
                      <p className="text-foreground/70 mb-4">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mt-1 mr-3 rounded-full p-1 bg-primary/10">
                              <Check size={14} className="text-primary" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Button className="group" variant="outline">
                          <span>En savoir plus</span>
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        {/* Featured service card */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Card className="border-border/40 overflow-hidden bg-card/50 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">Nouveau service</Badge>
                <h3 className="text-2xl font-bold mb-3">Stratégie commerciale sur mesure</h3>
                <p className="text-foreground/70 mb-6">
                  Élaboration et mise en œuvre de stratégies commerciales innovantes pour conquérir de nouveaux marchés et surpasser vos objectifs.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="rounded-full p-1 bg-primary/10">
                      <Check size={16} className="text-primary" />
                    </div>
                    <span>Analyse approfondie de votre marché</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full p-1 bg-primary/10">
                      <Check size={16} className="text-primary" />
                    </div>
                    <span>Création de plan d'action personnalisé</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full p-1 bg-primary/10">
                      <Check size={16} className="text-primary" />
                    </div>
                    <span>Accompagnement dans la mise en œuvre</span>
                  </li>
                </ul>
                
                <Button className="w-fit">Découvrir cette offre</Button>
              </div>
              
              <div className="relative">
                <div className="h-full min-h-[300px] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                  <div className="relative z-10 p-8 text-center">
                    <PuzzleIcon size={48} className="mx-auto mb-4 text-primary/70" />
                    <h4 className="text-xl font-semibold mb-2">Stratégie sur mesure</h4>
                    <p className="text-foreground/60 max-w-xs mx-auto">
                      Une approche personnalisée pour répondre parfaitement à vos besoins spécifiques
                    </p>
                  </div>
                  <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
