import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">ReenweezElectro</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre destination premium pour les accessoires électroniques au Maroc. 
              Nous sélectionnons rigoureusement nos produits pour vous offrir la meilleure 
              qualité à des prix compétitifs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/reenweezelectro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/reenweezelectro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-pink-600 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/212600000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-green-600 transition-all duration-300"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://youtube.com/@reenweezelectro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white hover:underline transition-all duration-200">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white hover:underline transition-all duration-200">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white hover:underline transition-all duration-200">
                  Informations de livraison
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white hover:underline transition-all duration-200">
                  Conditions générales de vente
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400">📧</span>
                <div>
                  <p className="font-medium">Email</p>
                  <p>contact@reenweezelectro.ma</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400">📱</span>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p>+212 6XX XXX XXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-orange-400">🚚</span>
                <div>
                  <p className="font-medium">Livraison</p>
                  <p>Gratuite partout au Maroc</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple-400">✅</span>
                <div>
                  <p className="font-medium">Garantie</p>
                  <p>15 jours sur tous nos produits</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mb-2">&copy; 2025 ReenweezElectro. Tous droits réservés.</p>
          <p className="text-sm">Boutique marocaine spécialisée dans les accessoires électroniques premium</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;