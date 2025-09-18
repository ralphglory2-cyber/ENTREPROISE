import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Votre panier est vide
            </h2>
            <p className="text-gray-600 mb-8">
              Découvrez nos produits et ajoutez-les à votre panier
            </p>
            <Link
              to="/products"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Voir nos produits
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-4">Panier ({getTotalItems()} articles)</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-black">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.product.description.substring(0, 100)}...
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-lg font-bold text-blue-500">
                        {item.product.price} DH
                      </span>
                      {item.product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">
                          {item.product.originalPrice} DH
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-1 border border-gray-300 rounded">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-md sticky top-4">
              <h3 className="text-xl font-bold text-black mb-4">Récapitulatif</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Sous-total ({getTotalItems()} articles)</span>
                  <span>{getTotalPrice()} DH</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Livraison</span>
                  <span>Gratuite</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>{getTotalPrice()} DH</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors mb-4"
              >
                Passer la commande
              </button>

              <Link
                to="/products"
                className="block text-center text-gray-600 hover:text-black transition-colors"
              >
                Continuer mes achats
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;