import React from 'react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

// Mock featured products
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Support de Chargeur Magnétique Sans Fil 15W',
    category: 'stations',
    price: 299,
    originalPrice: 399,
    description: 'Compatible iPhone 16/15/14/12/11 et Galaxy S25/S24/S23/S22. USB-C, facile à installer, design élégant.',
    images: ['https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg'],
    stock: 15,
    featured: true,
    created_at: '2025-01-10'
  },
  {
    id: '2',
    name: '2 Pièces Boîtier de Protection Batterie Externe',
    category: 'protections',
    price: 149,
    originalPrice: 199,
    description: 'Matériau TPU, caoutchouc souple mat. Protection 4 coins, texture lisse, antidérapant.',
    images: ['https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg'],
    stock: 8,
    featured: true,
    created_at: '2025-01-10'
  },
  {
    id: '3',
    name: 'Batterie Externe Magnétique Sans Fil 10 000 mAh',
    category: 'batteries',
    price: 449,
    originalPrice: 599,
    description: 'Charge rapide 22,5W. Affichage LED. Compatibilité iPhone séries 16/15/14/13/12.',
    images: ['https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg'],
    stock: 12,
    featured: true,
    created_at: '2025-01-10'
  }
];

const categories = [
  {
    title: 'Stations & Supports de Recharge',
    description: 'Supports magnétiques sans fil pour tous vos appareils',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    category: 'stations'
  },
  {
    title: 'Protections & Accessoires',
    description: 'Coques et accessoires de protection premium',
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg',
    category: 'protections'
  },
  {
    title: 'Batteries & Power Banks',
    description: 'Batteries externes haute capacité et charge rapide',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg',
    category: 'batteries'
  }
];

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Nos Catégories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection d'accessoires électroniques premium, 
              soigneusement choisis pour leur qualité et leur performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.category}
                {...category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Produits Vedettes
            </h2>
            <p className="text-gray-600">
              Les produits les plus populaires de notre boutique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;