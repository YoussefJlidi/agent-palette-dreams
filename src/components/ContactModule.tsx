
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallButton from '@/components/CallButton';
import CallbackForm from '@/components/CallbackForm';
import { Phone, PhoneIncoming } from 'lucide-react';
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

const ContactModule = () => {
  return (
    <section className="py-16 bg-background/95 border-y border-border/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-primary/5 to-background/0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">Contactez-nous facilement</h2>
          <p className="text-foreground/70 text-lg max-w-xl mx-auto">
            Choisissez le mode de contact qui vous convient le mieux, nous sommes là pour répondre à toutes vos questions.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Tabs defaultValue="callback" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="callback" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <PhoneIncoming className="mr-2 h-4 w-4" />
                Se faire rappeler
              </TabsTrigger>
              <TabsTrigger value="call" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" />
                Appeler maintenant
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="callback" className="space-y-4">
              <CallbackForm />
            </TabsContent>
            
            <TabsContent value="call" className="space-y-4">
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Prêt à nous parler ?</h3>
                <p className="text-foreground/70 mb-6">
                  Glissez le bouton pour être connecté immédiatement avec un de nos agents.
                </p>
                <CallButton />
                <p className="text-xs text-foreground/50 mt-6">
                  Nos agents sont disponibles du lundi au vendredi de 9h à 18h.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Toaster />
    </section>
  );
};

export default ContactModule;
