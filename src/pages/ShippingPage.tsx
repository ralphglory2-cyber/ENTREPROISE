import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Clock, Package, CheckCircle, Phone } from 'lucide-react';

const ShippingPage: React.FC = () => {
  const shippingSteps = [
    {
      icon: Package,
      title: 'Préparation',
      description: 'Votre commande est préparée avec soin dans nos entrepôts',
      duration: '2-4 heures'
    },
    {
      icon: Truck,
      title: 'Expédition',
      description: 'Votre colis est confié à nos partenaires de livraison',
      duration: '1-2 jours'
    },
    {
      icon: CheckCircle,
      title: 'Livraison',
      description: 'Réception de votre commande à l\'adresse indiquée',
      duration: '3-5 jours'
    }
  ];

  const cities = [
    { name: 'Casablanca', duration: '24-48h', region: 'Grand Casablanca' },
    { name: 'Rabat', duration: '24-48h', region: 'Rabat-Salé-Kénitra' },
    { name: 'Marrakech', duration: '48-72h', region: 'Marrakech-Safi' },
    { name: 'Fès', duration: '48-72h', region: 'Fès-Meknès' },
    { name: 'Tanger', duration: '48-72h', region: 'Tanger-Tétouan-Al Hoceïma' },
    { name: 'Agadir', duration: '72h', region: 'Souss-Massa' },
    { name: 'Oujda', duration: '72h', region: 'Oriental' },
    { name: 'Kenitra', duration: '48-72h', region: 'Rabat-Salé-Kénitra' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Informations de Livraison
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Livraison gratuite partout au Maroc avec suivi en temps réel
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Free Shipping Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-green-500 text-white rounded-2xl p-8 mb-16 text-center"
        >
          <Truck size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Livraison Gratuite Partout au Maroc</h2>
          <p className="text-xl">
            Profitez de la livraison gratuite sur toutes vos commandes, quel que soit le montant !
          </p>
        </motion.div>

        {/* Shipping Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-black text-center mb-12">Processus de Livraison</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Icon className="text-blue-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="bg-gray-100 rounded-lg py-2 px-4">
                    <span className="text-sm font-medium text-gray-700">Délai: {step.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Delivery Cities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-black mb-8">Villes Desservies</h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-4">
                {cities.map((city, index) => (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-blue-500" size={20} />
                      <div>
                        <h3 className="font-semibold text-black">{city.name}</h3>
                        <p className="text-sm text-gray-600">{city.region}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <Clock className="text-green-500" size={16} />
                        <span className="font-medium text-green-600">{city.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Autres villes :</strong> Nous livrons également dans toutes les autres villes du Maroc. 
                  Délai de livraison : 3-7 jours ouvrables.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Shipping Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Modes de Livraison</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-black mb-2">Livraison Standard (Gratuite)</h3>
                  <p className="text-gray-600 mb-2">
                    Livraison gratuite partout au Maroc via nos partenaires de confiance.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Délai: 3-7 jours ouvrables</li>
                    <li>• Suivi en temps réel</li>
                    <li>• Paiement à la livraison disponible</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-black mb-2">Livraison Express</h3>
                  <p className="text-gray-600 mb-2">
                    Livraison express pour les grandes villes (prochainement disponible).
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Délai: 24-48h</li>
                    <li>• Casablanca, Rabat, Marrakech</li>
                    <li>• Frais supplémentaires appliqués</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact for Shipping */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Questions sur votre livraison ?</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="text-green-500" size={24} />
                  <div>
                    <h3 className="font-semibold text-black">Service Client</h3>
                    <p className="text-gray-600">+212 6XX XXX XXX (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2">Horaires</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Lundi - Vendredi: 9h00 - 18h00</p>
                    <p>Samedi: 10h00 - 16h00</p>
                    <p>Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Nos Garanties</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-black">Garantie 15 jours</h3>
                    <p className="text-gray-600 text-sm">Retour gratuit sous 15 jours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-black">Produits authentiques</h3>
                    <p className="text-gray-600 text-sm">100% authentiques et neufs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-black">Emballage sécurisé</h3>
                    <p className="text-gray-600 text-sm">Emballage professionnel</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;