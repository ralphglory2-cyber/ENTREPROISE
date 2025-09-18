import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, CreditCard, Truck, RefreshCw, Phone } from 'lucide-react';

const TermsPage: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Informations Générales',
      content: [
        'ReenweezElectro est une boutique en ligne marocaine spécialisée dans la vente d\'accessoires électroniques premium.',
        'Nos conditions générales de vente s\'appliquent à toute commande passée sur notre site web.',
        'En passant commande, le client accepte sans réserve nos conditions générales de vente.',
        'ReenweezElectro se réserve le droit de modifier ces conditions à tout moment.'
      ]
    },
    {
      icon: CreditCard,
      title: 'Commandes et Paiements',
      content: [
        'Les prix sont affichés en dirhams marocains (DH) et incluent la TVA.',
        'Nous acceptons le paiement à la livraison (cash) et les paiements par PayPal.',
        'Pour les paiements PayPal, la conversion en euros se fait automatiquement.',
        'Toute commande est définitive après validation du paiement.',
        'Nous nous réservons le droit d\'annuler toute commande en cas de stock insuffisant.'
      ]
    },
    {
      icon: Truck,
      title: 'Livraison',
      content: [
        'Livraison gratuite partout au Maroc, sans montant minimum.',
        'Délai de livraison : 3-7 jours ouvrables selon la destination.',
        'Les grandes villes (Casablanca, Rabat, Marrakech) : 24-48h.',
        'Le client doit être présent lors de la livraison ou désigner un représentant.',
        'En cas d\'absence, une nouvelle tentative sera programmée sous 24h.'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Retours et Garanties',
      content: [
        'Garantie de 15 jours sur tous nos produits à partir de la date de livraison.',
        'Les produits doivent être retournés dans leur emballage d\'origine.',
        'Les frais de retour sont à la charge de ReenweezElectro si le produit est défectueux.',
        'Remboursement intégral ou échange selon la préférence du client.',
        'Les produits endommagés par une utilisation inappropriée ne sont pas couverts.'
      ]
    },
    {
      icon: Shield,
      title: 'Responsabilités',
      content: [
        'ReenweezElectro garantit la conformité des produits livrés.',
        'Nous ne sommes pas responsables des retards de livraison dus à des causes externes.',
        'Les photos des produits sont non contractuelles et peuvent différer légèrement.',
        'Le client est responsable de la vérification de la compatibilité des produits.',
        'ReenweezElectro décline toute responsabilité en cas d\'utilisation inappropriée.'
      ]
    },
    {
      icon: Phone,
      title: 'Service Client',
      content: [
        'Notre service client est disponible du lundi au vendredi de 9h à 18h.',
        'Contact par WhatsApp : +212 6XX XXX XXX',
        'Contact par email : contact@reenweezelectro.ma',
        'Nous nous engageons à répondre dans les 24h maximum.',
        'Toute réclamation doit être formulée par écrit avec preuves à l\'appui.'
      ]
    }
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
            Conditions Générales de Vente
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Conditions applicables à tous nos clients et commandes
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-12 text-center"
        >
          <p className="text-gray-600">
            <strong>Dernière mise à jour :</strong> Janvier 2025 • 
            <strong className="text-blue-500 ml-2">Version 1.0</strong>
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-xl p-3 flex-shrink-0">
                    <Icon className="text-blue-500" size={28} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-black mb-6">{section.title}</h2>
                    <div className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact for Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-8 mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Questions sur nos CGV ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Notre équipe est là pour vous aider à comprendre nos conditions
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:contact@reenweezelectro.ma"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Nous contacter par email
            </a>
          </div>
        </motion.div>

        {/* Legal Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gray-100 rounded-2xl p-6 mt-8 text-center"
        >
          <p className="text-sm text-gray-600">
            <strong>Mentions légales :</strong> ReenweezElectro - Boutique en ligne marocaine • 
            RC : XXXXXXX • IF : XXXXXXXX • 
            Adresse : [À compléter] • 
            Email : contact@reenweezelectro.ma
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;