
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download, Mail } from 'lucide-react';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPlan, customerInfo, orderNumber } = location.state || {};

  if (!selectedPlan || !customerInfo || !orderNumber) {
    navigate('/');
    return null;
  }

  const price = parseInt(selectedPlan.price.replace('€', ''));
  const totalPrice = Math.round(price * 1.2);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-600">
                Paiement confirmé !
              </CardTitle>
              <p className="text-muted-foreground">
                Votre abonnement a été activé avec succès
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Numéro de commande</p>
                    <p className="text-muted-foreground">{orderNumber}</p>
                  </div>
                  <div>
                    <p className="font-medium">Plan sélectionné</p>
                    <p className="text-muted-foreground">{selectedPlan.name}</p>
                  </div>
                  <div>
                    <p className="font-medium">Montant payé</p>
                    <p className="text-muted-foreground">{totalPrice}€ TTC</p>
                  </div>
                  <div>
                    <p className="font-medium">Facturation</p>
                    <p className="text-muted-foreground">Mensuelle</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Prochaines étapes :</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-medium">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Confirmation par email</p>
                      <p className="text-sm text-muted-foreground">
                        Vous recevrez un email de confirmation à {customerInfo.email} avec tous les détails de votre abonnement.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-medium">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Accès à votre espace client</p>
                      <p className="text-sm text-muted-foreground">
                        Un lien d'accès sécurisé vous sera envoyé pour configurer votre espace et commencer à utiliser nos services.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-medium">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Contact de notre équipe</p>
                      <p className="text-sm text-muted-foreground">
                        Notre équipe vous contactera sous 24h pour démarrer l'implémentation de vos services commerciaux.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Besoin d'aide ?</h4>
                <p className="text-sm text-blue-700 mb-3">
                  Notre équipe support est disponible pour vous accompagner dans la mise en place de votre solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Contacter le support
                  </Button>
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger la facture
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="w-full bg-black hover:bg-black/90 text-white"
                  onClick={() => navigate('/')}
                >
                  Retour à l'accueil
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:support@exemple.com'}
                >
                  Nous contacter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
