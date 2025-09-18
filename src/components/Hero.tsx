import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Truck, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Accessoires Électroniques
            <span className="block text-blue-400 mt-2">Premium au Maroc</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez notre sélection exclusive d'accessoires électroniques haut de gamme. 
            Qualité garantie, design premium et technologie de pointe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Link
              to="/products"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Découvrir nos produits
            </Link>
            <div className="flex items-center space-x-3 text-green-400">
              <Truck size={24} />
              <span className="text-lg font-medium">Livraison gratuite partout au Maroc</span>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Shield className="text-blue-400" size={24} />
              <span className="font-medium">Garantie 15 jours</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Award className="text-blue-400" size={24} />
              <span className="font-medium">Qualité Premium</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Truck className="text-blue-400" size={24} />
              <span className="font-medium">Livraison Rapide</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;