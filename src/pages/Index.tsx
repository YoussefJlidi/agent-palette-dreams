
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CallNow from '@/components/CallNow';
import AgentTypes from '@/components/AgentTypes';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <CallNow />
      
      <section id="services" className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="heading-lg mb-4">Nos services</h2>
            <p className="text-foreground/80 text-lg">
              Nous accompagnons les entreprises à chaque étape du cycle de vie commercial, du recrutement à l'optimisation des performances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Appels outbound</h3>
              <p className="text-foreground/70">
                Identification et sélection des meilleurs talents commerciaux adaptés à votre secteur d'activité et à votre culture d'entreprise.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Appels inbound</h3>
              <p className="text-foreground/70">
                Programmes de formation sur mesure pour développer les compétences de vos équipes et maximiser leur efficacité sur le terrain.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Analyse des performances</h3>
              <p className="text-foreground/70">
                Outils et méthodes pour suivre, analyser et optimiser les performances de vos équipes commerciales en temps réel.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Paiement à la minute</h3>
              <p className="text-foreground/70">
                Accompagnement individuel de vos commerciaux pour développer leur potentiel et surmonter les obstacles spécifiques.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 animate-fade-in" style={{
            animationDelay: '0.5s'
          }}>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connectez vos outils</h3>
              <p className="text-foreground/70">
                Élaboration et mise en œuvre de stratégies commerciales innovantes pour conquérir de nouveaux marchés.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Envoyez vos mailings</h3>
              <p className="text-foreground/70">
                Mise en place d'outils et de processus pour automatiser les tâches répétitives et permettre à vos commerciaux de se concentrer sur la vente.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <AgentTypes />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <Footer />
    </div>;
};
export default Index;
