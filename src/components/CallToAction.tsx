
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, User, Briefcase, Send } from 'lucide-react';
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const CallToAction = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Demande envoyée",
      description: "Nous vous contacterons bientôt pour organiser une démo personnalisée.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="w-full bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à transformer votre force de vente?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider à atteindre vos objectifs commerciaux.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center bg-primary-foreground/10 border border-primary-foreground/20 rounded-md">
                          <User className="ml-3 h-5 w-5 text-primary-foreground/50" />
                          <Input
                            placeholder="Votre nom"
                            className="border-0 bg-transparent placeholder:text-primary-foreground/50 text-primary-foreground"
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center bg-primary-foreground/10 border border-primary-foreground/20 rounded-md">
                          <Mail className="ml-3 h-5 w-5 text-primary-foreground/50" />
                          <Input
                            type="email"
                            placeholder="Votre email"
                            className="border-0 bg-transparent placeholder:text-primary-foreground/50 text-primary-foreground"
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center bg-primary-foreground/10 border border-primary-foreground/20 rounded-md">
                        <Briefcase className="ml-3 h-5 w-5 text-primary-foreground/50" />
                        <Input
                          placeholder="Votre entreprise"
                          className="border-0 bg-transparent placeholder:text-primary-foreground/50 text-primary-foreground"
                          {...field}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex bg-primary-foreground/10 border border-primary-foreground/20 rounded-md p-3">
                        <Send className="h-5 w-5 text-primary-foreground/50 mr-2 mt-1" />
                        <Textarea
                          placeholder="Votre message (optionnel)"
                          className="border-0 bg-transparent resize-none placeholder:text-primary-foreground/50 text-primary-foreground"
                          {...field}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button 
                type="submit"
                className="w-full py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 flex items-center justify-center"
              >
                Demander une démo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-primary-foreground/70 text-center pt-2">
                En soumettant ce formulaire, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
