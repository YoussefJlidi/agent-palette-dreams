
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Check } from 'lucide-react';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPlan = location.state?.selectedPlan;

  const [customerInfo, setCustomerInfo] = useState({
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'France'
  });

  if (!selectedPlan) {
    navigate('/');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContinueToPayment = () => {
    navigate('/payment', { 
      state: { 
        selectedPlan, 
        customerInfo 
      } 
    });
  };

  const price = parseInt(selectedPlan.price.replace('€', ''));

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux tarifs
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire client */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Informations client</CardTitle>
                <CardDescription>
                  Renseignez vos informations pour continuer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nom de l'entreprise *
                  </label>
                  <Input
                    name="company"
                    value={customerInfo.company}
                    onChange={handleInputChange}
                    placeholder="Votre entreprise"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Prénom *
                    </label>
                    <Input
                      name="firstName"
                      value={customerInfo.firstName}
                      onChange={handleInputChange}
                      placeholder="Prénom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nom *
                    </label>
                    <Input
                      name="lastName"
                      value={customerInfo.lastName}
                      onChange={handleInputChange}
                      placeholder="Nom"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    placeholder="email@exemple.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Téléphone *
                  </label>
                  <Input
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    placeholder="+33 6 12 34 56 78"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Adresse *
                  </label>
                  <Input
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    placeholder="123 rue de la Paix"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ville *
                    </label>
                    <Input
                      name="city"
                      value={customerInfo.city}
                      onChange={handleInputChange}
                      placeholder="Paris"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Code postal *
                    </label>
                    <Input
                      name="postalCode"
                      value={customerInfo.postalCode}
                      onChange={handleInputChange}
                      placeholder="75001"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Récapitulatif commande */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Récapitulatif de commande</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{selectedPlan.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedPlan.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{selectedPlan.price}</div>
                      <div className="text-sm text-muted-foreground">/mois</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Inclus dans votre plan :</h4>
                    {selectedPlan.features.slice(0, 3).map((feature: string, index: number) => (
                      <div key={index} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                    {selectedPlan.features.length > 3 && (
                      <div className="text-sm text-muted-foreground">
                        +{selectedPlan.features.length - 3} autres fonctionnalités
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Sous-total</span>
                      <span>{selectedPlan.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TVA (20%)</span>
                      <span>{Math.round(price * 0.2)}€</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>{Math.round(price * 1.2)}€</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-black hover:bg-black/90 text-white"
                    onClick={handleContinueToPayment}
                    disabled={!customerInfo.company || !customerInfo.firstName || !customerInfo.lastName || !customerInfo.email}
                  >
                    Continuer vers le paiement
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Paiement sécurisé par carte bancaire
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
