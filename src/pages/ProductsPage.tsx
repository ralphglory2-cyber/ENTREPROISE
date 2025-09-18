import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

// Mock products data
const allProducts: Product[] = [
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
  },
  {
    id: '4',
    name: 'Station de Charge 3-en-1 MagSafe',
    category: 'stations',
    price: 549,
    originalPrice: 699,
    description: 'Charge simultanée iPhone, AirPods et Apple Watch. Design premium en aluminium.',
    images: ['https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg'],
    stock: 6,
    featured: false,
    created_at: '2025-01-10'
  },
  {
    id: '5',
    name: 'Coque Protection Transparente MagSafe',
    category: 'protections',
    price: 89,
    originalPrice: 119,
    description: 'Protection transparente avec support MagSafe. Résistant aux rayures et aux chocs.',
    images: ['https://images.pexels.com/photos/5082578/pexels-photo-5082578.jpeg'],
    stock: 20,
    featured: false,
    created_at: '2025-01-10'
  },
  {
    id: '6',
    name: 'Power Bank 20000mAh Charge Rapide',
    category: 'batteries',
    price: 199,
    originalPrice: 279,
    description: 'Batterie externe haute capacité avec affichage digital. Charge rapide PD 20W.',
    images: ['https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg'],
    stock: 10,
    featured: false,
    created_at: '2025-01-10'
  }
];

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    setSelectedCategory(category);
    
    if (category === 'all') {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(product => product.category === category));
    }
  }, [searchParams]);

  const categories = [
    { value: 'all', label: 'Tous les produits' },
    { value: 'stations', label: 'Stations & Supports' },
    { value: 'protections', label: 'Protections & Accessoires' },
    { value: 'batteries', label: 'Batteries & Power Banks' }
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(product => product.category === category));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-4">Nos Produits</h1>
          <p className="text-gray-600">
            Découvrez notre gamme complète d'accessoires électroniques premium
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategoryChange(category.value)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucun produit trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;