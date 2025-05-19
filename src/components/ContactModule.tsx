
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallButton from '@/components/CallButton';
import CallbackForm from '@/components/CallbackForm';
import { PhoneCall } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

const ContactModule = () => {
  return (
    <section className="py-16 bg-[#111111] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/20 text-primary rounded-full mb-4">
              Live demo
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Can't believe? <span className="text-primary">Try NOW</span> a free test call
            </h2>
            
            <p className="text-xl text-gray-300 mb-4">
              Curious how our AI agents work?
            </p>
            
            <p className="text-gray-300 max-w-lg">
              Get a hands-on experience by trying a free demo call. Fill in your details, and our AI representative will call you instantly.
            </p>
            
            <p className="text-gray-300 mt-8">
              Agent is trained to discuss about iapulsion services and book appointments.
            </p>
          </div>
          
          {/* Right Column - Interactive Form */}
          <div className="lg:w-1/2">
            <div className="bg-[#0D0D0D] rounded-3xl p-6 border border-primary/20 max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                    alt="AI Robot Agent" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Demo AI agent</h3>
                  <p className="text-primary text-sm">iapulsion representative</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <img 
                      src="https://flagcdn.com/w40/gb.png" 
                      alt="English" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-300">English</span>
                </div>
              </div>
              
              <Tabs defaultValue="callback" className="w-full">
                <TabsContent value="callback" className="m-0">
                  <CallbackForm darkMode={true} />
                </TabsContent>
                
                <TabsContent value="call" className="m-0">
                  <div className="space-y-6">
                    <div className="text-center text-gray-300 text-sm mt-6">
                      The call will automatically end after <span className="text-primary font-medium">5 minutes</span>
                    </div>
                    <CallButton darkMode={true} slideText="SLIDE TO CALL" />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      <Toaster />
    </section>
  );
};

export default ContactModule;
