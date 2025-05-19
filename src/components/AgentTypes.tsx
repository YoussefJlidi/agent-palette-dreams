
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const agentTypes = [
  {
    title: "Agent Commercial B2B",
    description: "Spécialisé dans la vente interentreprises, ce profil établit des relations durables avec des clients professionnels.",
    icon: "💼",
    color: "bg-chart-1/10",
    borderColor: "border-chart-1/30"
  },
  {
    title: "Agent Commercial Export",
    description: "Expert en commerce international, il développe votre présence sur les marchés étrangers et gère les spécificités culturelles.",
    icon: "🌍",
    color: "bg-chart-2/10",
    borderColor: "border-chart-2/30"
  },
  {
    title: "Agent Commercial Retail",
    description: "Centré sur la vente aux particuliers, il excelle dans la persuasion et la création d'expériences client mémorables.",
    icon: "🛍️",
    color: "bg-chart-3/10",
    borderColor: "border-chart-3/30"
  },
  {
    title: "Agent Commercial Digital",
    description: "Maîtrise les canaux de vente en ligne et le social selling pour convertir des prospects dans l'environnement numérique.",
    icon: "💻",
    color: "bg-chart-4/10",
    borderColor: "border-chart-4/30"
  },
  {
    title: "Agent Commercial Technique",
    description: "Possède une expertise technique approfondie pour vendre des solutions complexes nécessitant des connaissances spécifiques.",
    icon: "⚙️",
    color: "bg-chart-5/10",
    borderColor: "border-chart-5/30"
  },
  {
    title: "Agent Commercial Indépendant",
    description: "Entrepreneur autonome qui représente plusieurs marques et gère son activité comme une micro-entreprise.",
    icon: "🚀",
    color: "bg-primary/10",
    borderColor: "border-primary/30"
  }
];

const AgentTypes = () => {
  return (
    <section id="types" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Types d'agents commerciaux</h2>
          <p className="text-foreground/80 text-lg">
            Découvrez les différents profils d'agents commerciaux et identifiez ceux qui correspondent le mieux aux besoins de votre entreprise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentTypes.map((type, index) => (
            <Card 
              key={index} 
              className={`card-hover ${type.color} border ${type.borderColor} animate-fade-in`} 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-4xl mb-4">{type.icon}</div>
                <CardTitle>{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-base">
                  {type.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentTypes;
