import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Truck } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    customerAddress: '',
    city: '',
    paymentMethod: 'cod' as 'cod' | 'paypal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart and redirect
    clearCart();
    setIsSubmitting(false);
    
    // Show success message and redirect
    alert('Commande passée avec succès ! Nous vous contacterons bientôt.');
    navigate('/');
  };

  const cities = [
    'Casablanca', 'Rabat', 'Fès', 'Marrakech', 'Agadir', 'Tanger', 
    'Meknès', 'Oujda', 'Kenitra', 'Tétouan', 'Safi', 'El Jadida'
  ];

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-4">Finaliser la commande</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <h2 className="text-xl font-bold mb-6">Informations de livraison</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de téléphone *
                </label>
                <input
                  type="tel"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleInputChange}
                  placeholder="+212 6XX XXX XXX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ville *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionnez votre ville</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse complète *
                </label>
                <input
                  type="text"
                  name="customerAddress"
                  value={formData.customerAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Mode de paiement
                </label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="text-blue-500"
                    />
                    <Truck className="text-gray-600" size={20} />
                    <span>Paiement à la livraison (Cash)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                      className="text-blue-500"
                    />
                    <CreditCard className="text-gray-600" size={20} />
                    <span>PayPal (Carte bancaire)</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
              >
                {isSubmitting ? 'Commande en cours...' : 'Confirmer la commande'}
              </button>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg p-6 shadow-md h-fit"
          >
            <h2 className="text-xl font-bold mb-6">Récapitulatif de commande</h2>
            
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={item.product.id} className="flex justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium">{item.product.name}</h4>
                    <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                  </div>
                  <span className="font-medium">
                    {item.product.price * item.quantity} DH
                  </span>
                </div>
              ))}
            </div>

            <hr className="mb-4" />
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{getTotalPrice()} DH</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Livraison</span>
                <span>Gratuite</span>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>{getTotalPrice()} DH</span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-green-800">
                <Truck size={20} />
                <span className="font-medium">Livraison gratuite partout au Maroc</span>
              </div>
              <p className="text-sm text-green-600 mt-1">
                Garantie 15 jours sur tous nos produits
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;