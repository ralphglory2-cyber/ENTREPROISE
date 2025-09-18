import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Shield } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            -{discount}%
          </div>
        )}
        {product.stock <= 5 && product.stock > 0 && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Stock limité
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-bold text-xl text-black mb-3 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={18} className="text-yellow-400 fill-current" />
          ))}
          <span className="text-sm text-gray-500 ml-2 font-medium">(4.8) • 127 avis</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-blue-500">
              {product.price} DH
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                {product.originalPrice} DH
              </span>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-green-600 font-medium">
            <Shield size={16} className="mr-2" />
            Garantie 15 jours
          </div>
          <div className="text-sm text-gray-600">
            ✓ Livraison gratuite au Maroc
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2 font-semibold"
        >
          <ShoppingCart size={20} />
          <span>{product.stock === 0 ? 'Rupture de stock' : 'Ajouter au panier'}</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;