
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Lock, CreditCard } from 'lucide-react';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPlan, customerInfo } = location.state || {};

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  if (!selectedPlan || !customerInfo) {
    navigate('/');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Formatage automatique des champs
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      formattedValue = formattedValue.substring(0, 19); // Limite à 16 chiffres + espaces
    } else if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substring(0, 5);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 3);
    }

    setPaymentInfo(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulation du traitement du paiement
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/payment-success', { 
        state: { 
          selectedPlan, 
          customerInfo,
          orderNumber: `ORD-${Date.now()}`
        } 
      });
    }, 3000);
  };

  const price = parseInt(selectedPlan.price.replace('€', ''));
  const totalPrice = Math.round(price * 1.2);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/checkout', { state: { selectedPlan } })}
          className="mb-6"
          disabled={isProcessing}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux informations
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire de paiement */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Paiement sécurisé
                </CardTitle>
                <CardDescription>
                  Vos informations de paiement sont protégées et chiffrées
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nom sur la carte *
                  </label>
                  <Input
                    name="cardName"
                    value={paymentInfo.cardName}
                    onChange={handleInputChange}
                    placeholder="Jean Dupont"
                    required
                    disabled={isProcessing}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Numéro de carte *
                  </label>
                  <div className="relative">
                    <Input
                      name="cardNumber"
                      value={paymentInfo.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                      disabled={isProcessing}
                      className="pl-10"
                    />
                    <CreditCard className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Date d'expiration *
                    </label>
                    <Input
                      name="expiryDate"
                      value={paymentInfo.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/AA"
                      required
                      disabled={isProcessing}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      CVV *
                    </label>
                    <Input
                      name="cvv"
                      value={paymentInfo.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                      disabled={isProcessing}
                    />
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Informations de facturation</h4>
                  <div className="text-sm space-y-1">
                    <p><strong>{customerInfo.company}</strong></p>
                    <p>{customerInfo.firstName} {customerInfo.lastName}</p>
                    <p>{customerInfo.address}</p>
                    <p>{customerInfo.postalCode} {customerInfo.city}</p>
                    <p>{customerInfo.email}</p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-black hover:bg-black/90 text-white"
                  onClick={handlePayment}
                  disabled={!paymentInfo.cardNumber || !paymentInfo.expiryDate || !paymentInfo.cvv || !paymentInfo.cardName || isProcessing}
                >
                  {isProcessing ? 'Traitement en cours...' : `Payer ${totalPrice}€`}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  En procédant au paiement, vous acceptez nos conditions générales de vente
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Récapitulatif */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Récapitulatif final</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">{selectedPlan.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Abonnement mensuel
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Plan {selectedPlan.name}</span>
                      <span>{selectedPlan.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TVA (20%)</span>
                      <span>{Math.round(price * 0.2)}€</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total à payer</span>
                      <span>{totalPrice}€</span>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                    <div className="flex items-center text-green-800 text-sm">
                      <Lock className="h-4 w-4 mr-2" />
                      Paiement 100% sécurisé
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2"><strong>Votre abonnement comprend :</strong></p>
                    <ul className="space-y-1">
                      {selectedPlan.features.slice(0, 3).map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
