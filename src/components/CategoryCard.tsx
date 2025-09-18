import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  image: string;
  description: string;
  category: string;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, description, category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <Link to={`/products?category=${category}`}>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-blue-500 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;