
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AgentTypes from '@/components/AgentTypes';
import Testimonials from '@/components/Testimonials';
import ContactModule from '@/components/ContactModule';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <ContactModule />
      <AgentTypes />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
