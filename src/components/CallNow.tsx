
import React, { useState } from 'react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const CallNow = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre numéro de téléphone",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Demande envoyée",
      description: "Un agent vous contactera très bientôt",
    });
    setPhoneNumber('');
  };
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Parlez dès maintenant à nos agents
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="md:w-1/2 w-full">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-medium mb-4">Ajouter votre numéro</h3>
              
              <form onSubmit={handleSubmit}>
                <Input 
                  type="tel" 
                  placeholder="Votre numéro de téléphone" 
                  className="mb-4"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                
                <Button type="submit" className="w-full bg-black hover:bg-black/90 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler un agent
                </Button>
              </form>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                  1
                </div>
                <p className="text-lg">Nos agents travaillent pour vous 24h sur 24</p>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                  2
                </div>
                <p className="text-lg">Pluguer vos outils</p>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                  3
                </div>
                <p className="text-lg">Appels inbound et outbound</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallNow;
