
import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const faqData = [
  {
    question: "Comment fonctionne la facturation à la minute ?",
    answer: "Notre système de facturation à la minute vous permet de ne payer que pour le temps réellement utilisé. Nous suivons précisément le temps passé sur chaque appel, ce qui optimise vos coûts et vous offre une transparence totale."
  },
  {
    question: "Quels secteurs d'activité couvrez-vous ?",
    answer: "Nous travaillons avec une large gamme de secteurs, notamment la tech, le retail, l'immobilier, la finance, et les services B2B. Nos agents commerciaux sont formés pour s'adapter aux spécificités de chaque industrie."
  },
  {
    question: "Comment recrutez-vous vos agents commerciaux ?",
    answer: "Notre processus de recrutement rigoureux comprend plusieurs étapes de sélection, des tests d'aptitude, des simulations de vente et des entretiens approfondis pour garantir que seuls les meilleurs talents rejoignent notre équipe."
  },
  {
    question: "Puis-je intégrer vos services à mes outils CRM existants ?",
    answer: "Absolument. Notre plateforme est conçue pour s'intégrer facilement avec les CRM populaires comme Salesforce, HubSpot, et d'autres solutions. Nous proposons également des API pour des intégrations personnalisées."
  },
  {
    question: "Quelle est la durée minimale d'engagement ?",
    answer: "Nous proposons des formules flexibles adaptées à vos besoins. Notre offre standard commence à partir d'un mois d'engagement, mais nous proposons des tarifs préférentiels pour les engagements plus longs."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };

  return (
    <section id="faq" className="section-padding bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="heading-lg mb-4">Questions fréquentes</h2>
          <p className="text-foreground/80 text-lg">
            Tout ce que vous devez savoir sur nos services et notre approche
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="animate-fade-in border-b border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
