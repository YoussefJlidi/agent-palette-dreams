
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneCall } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Définir le schéma de validation pour le formulaire
const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  phone: z.string().min(10, { message: "Veuillez entrer un numéro de téléphone valide." }),
});

type FormValues = z.infer<typeof formSchema>;

const CallbackForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialiser le formulaire avec react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simuler un envoi de formulaire
    try {
      // Ici, vous pourriez implémenter la logique réelle d'envoi de demande de rappel
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Demande envoyée",
        description: `Nous vous contacterons au ${data.phone} dans les plus brefs délais.`,
      });
      
      // Réinitialiser le formulaire
      form.reset();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre demande.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <PhoneCall size={20} className="text-primary" />
          Être rappelé par un agent
        </h3>
        <p className="text-foreground/70 text-sm">
          Laissez-nous vos coordonnées et un expert vous contactera dans les plus brefs délais.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre nom</FormLabel>
                <FormControl>
                  <Input placeholder="Jean Dupont" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numéro de téléphone</FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-foreground/70">
                      +33
                    </div>
                    <Input className="pl-12" placeholder="6 12 34 56 78" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Demander un rappel"}
          </Button>
          
          <p className="text-xs text-center text-foreground/50 mt-4">
            En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default CallbackForm;
