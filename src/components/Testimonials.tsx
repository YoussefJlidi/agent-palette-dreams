
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sophie Martin",
    position: "Directrice Commerciale, Tech Solutions",
    content: "Grâce à SalesAgentPro, nous avons recruté trois agents commerciaux parfaitement adaptés à notre secteur. Notre chiffre d'affaires a augmenté de 27% en seulement six mois.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Thomas Dubois",
    position: "CEO, Retail Expansion Group",
    content: "La formation fournie à nos agents a complètement transformé notre approche commerciale. Nos équipes sont plus confiantes et les résultats parlent d'eux-mêmes.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Léa Moreau",
    position: "Agent commercial indépendant",
    content: "En tant qu'agent indépendant, les ressources et le coaching proposés m'ont permis de structurer mon activité et d'attirer des clients plus importants. Un investissement très rentable.",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Ce que nos clients disent</h2>
          <p className="text-foreground/80 text-lg">
            Découvrez comment nous aidons entreprises et agents commerciaux à atteindre de nouveaux sommets de performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border border-border bg-background/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-6">
                <div className="mb-4 text-2xl text-primary">"</div>
                <p className="text-foreground mb-6 italic">
                  {testimonial.content}
                </p>
              </CardContent>
              <CardFooter className="flex items-center border-t border-border pt-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/70">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
