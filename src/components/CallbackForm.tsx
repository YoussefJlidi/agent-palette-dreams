
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneCall } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Définir le schéma de validation pour le formulaire
const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer un email valide." }),
  phone: z.string().min(10, { message: "Veuillez entrer un numéro de téléphone valide." }),
});

type FormValues = z.infer<typeof formSchema>;

interface CallbackFormProps {
  darkMode?: boolean;
}

const CallbackForm = ({ darkMode = false }: CallbackFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialiser le formulaire avec react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
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

  const inputClasses = darkMode 
    ? "bg-[#1a1a1a] border-gray-700 text-white placeholder:text-gray-500 focus:ring-primary"
    : "bg-card/80 border-border/50 text-foreground";

  return (
    <div className="space-y-4">      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    className={cn(inputClasses)}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Your e-mail" 
                    className={cn(inputClasses)}
                    type="email"
                    {...field} 
                  />
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
                <FormControl>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <div className="flex items-center gap-2">
                        <img 
                          src="https://flagcdn.com/w20/fr.png" 
                          alt="France" 
                          className="w-5 h-3.5 object-cover rounded-sm"  
                        />
                        <span className={cn("text-sm", darkMode ? "text-gray-400" : "text-foreground/70")}>+33</span>
                      </div>
                    </div>
                    <Input 
                      className={cn("pl-20", inputClasses)} 
                      placeholder="06 12 34 56 78" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className={cn(
              "w-full mt-4",
              darkMode ? "bg-primary hover:bg-primary/90 text-white" : ""
            )} 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Demander un rappel"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CallbackForm;
