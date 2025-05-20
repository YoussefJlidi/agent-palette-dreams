
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
    title: "Agent Commercial B2C",
    description: "Expert en vente aux particuliers, il développe votre présence sur le marché grand public et gère les spécificités de la clientèle individuelle.",
    icon: "🛍️",
    color: "bg-chart-2/10",
    borderColor: "border-chart-2/30"
  },
  {
    title: "Agent Réceptionniste",
    description: "Accueille et oriente les prospects, gère les premiers contacts et qualifie les demandes pour optimiser le parcours client.",
    icon: "👋",
    color: "bg-chart-4/10",
    borderColor: "border-chart-4/30"
  },
  {
    title: "Agent Ingénieur Commercial",
    description: "Possède une expertise technique approfondie pour vendre des solutions complexes nécessitant des connaissances spécifiques.",
    icon: "⚙️",
    color: "bg-chart-5/10",
    borderColor: "border-chart-5/30"
  },
  {
    title: "Agent Account Manager",
    description: "Gère et développe les comptes clients existants, optimise leur satisfaction et maximise leur valeur à long terme.",
    icon: "🤝",
    color: "bg-primary/10",
    borderColor: "border-primary/30"
  },
  {
    title: "Agent Customer Success",
    description: "Assure la réussite des clients avec vos produits et services, anticipe leurs besoins et garantit leur fidélisation.",
    icon: "🌟",
    color: "bg-chart-1/10",
    borderColor: "border-chart-1/30"
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
