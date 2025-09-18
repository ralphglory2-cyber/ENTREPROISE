import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  Users,
  Eye,
  Edit,
  Trash2,
  Plus
} from 'lucide-react';
import { AdminStats, Product, Order } from '../types';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stats' | 'products' | 'orders'>('stats');

  // Mock data
  const stats: AdminStats = {
    pendingOrders: 12,
    deliveredOrders: 87,
    todayOrders: 5,
    weekOrders: 23,
    monthOrders: 156,
    totalVisitors: 2847,
    pageViews: 8934
  };

  const mockOrders: Order[] = [
    {
      id: '1',
      customer_name: 'Ahmed Benali',
      customer_phone: '+212 6XX XXX XXX',
      customer_email: 'ahmed@email.com',
      customer_address: '123 Rue Mohammed V',
      city: 'Casablanca',
      items: [],
      total: 599,
      payment_method: 'cod',
      status: 'pending',
      created_at: '2025-01-10'
    },
    {
      id: '2',
      customer_name: 'Fatima Zahra',
      customer_phone: '+212 6YY YYY YYY',
      customer_email: 'fatima@email.com',
      customer_address: '456 Avenue Hassan II',
      city: 'Rabat',
      items: [],
      total: 299,
      payment_method: 'paypal',
      status: 'delivered',
      created_at: '2025-01-09'
    }
  ];

  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Support de Chargeur Magnétique Sans Fil 15W',
      category: 'stations',
      price: 299,
      originalPrice: 399,
      description: 'Compatible iPhone 16/15/14/12/11 et Galaxy S25/S24/S23/S22.',
      images: ['https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg'],
      stock: 15,
      featured: true,
      created_at: '2025-01-10'
    }
  ];

  const updateOrderStatus = (orderId: string, newStatus: 'pending' | 'delivered' | 'cancelled') => {
    // Implementation for updating order status
    console.log(`Order ${orderId} status updated to ${newStatus}`);
  };

  const StatsCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Commandes en attente</p>
            <p className="text-3xl font-bold text-orange-600">{stats.pendingOrders}</p>
          </div>
          <ShoppingCart className="text-orange-600" size={32} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Commandes livrées</p>
            <p className="text-3xl font-bold text-green-600">{stats.deliveredOrders}</p>
          </div>
          <Package className="text-green-600" size={32} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Visiteurs totaux</p>
            <p className="text-3xl font-bold text-blue-600">{stats.totalVisitors}</p>
          </div>
          <Users className="text-blue-600" size={32} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Pages vues</p>
            <p className="text-3xl font-bold text-purple-600">{stats.pageViews}</p>
          </div>
          <Eye className="text-purple-600" size={32} />
        </div>
      </motion.div>
    </div>
  );

  const OrdersTable = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold">Gestion des commandes</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {order.customer_name}
                    </div>
                    <div className="text-sm text-gray-500">{order.customer_phone}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.total} DH
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.status === 'pending' 
                      ? 'bg-yellow-100 text-yellow-800'
                      : order.status === 'delivered'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {order.status === 'pending' ? 'En attente' : 
                     order.status === 'delivered' ? 'Livrée' : 'Annulée'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(order.created_at).toLocaleDateString('fr-FR')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {order.status === 'pending' && (
                    <button
                      onClick={() => updateOrderStatus(order.id, 'delivered')}
                      className="text-green-600 hover:text-green-900 mr-3"
                    >
                      Marquer livrée
                    </button>
                  )}
                  <button className="text-blue-600 hover:text-blue-900">
                    Voir détails
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const ProductsTable = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-bold">Gestion des produits</h3>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors flex items-center space-x-2">
          <Plus size={20} />
          <span>Ajouter produit</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Produit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prix
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Catégorie
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockProducts.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-10 h-10 rounded-md object-cover mr-3"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {product.name.substring(0, 40)}...
                      </div>
                      <div className="text-sm text-gray-500">{product.category}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.price} DH</div>
                  {product.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      {product.originalPrice} DH
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span className={product.stock <= 5 ? 'text-red-600' : 'text-green-600'}>
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <Edit size={16} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-4">Tableau de bord administrateur</h1>
          <p className="text-gray-600">Gérez votre boutique ReenweezElectro</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8 w-fit">
          {[
            { id: 'stats', label: 'Statistiques', icon: TrendingUp },
            { id: 'products', label: 'Produits', icon: Package },
            { id: 'orders', label: 'Commandes', icon: ShoppingCart }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'stats' && <StatsCards />}
        {activeTab === 'orders' && <OrdersTable />}
        {activeTab === 'products' && <ProductsTable />}

        {/* Quick Stats Overview */}
        {activeTab === 'stats' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4">Commandes par période</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Aujourd'hui</span>
                  <span className="font-semibold">{stats.todayOrders}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cette semaine</span>
                  <span className="font-semibold">{stats.weekOrders}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ce mois</span>
                  <span className="font-semibold">{stats.monthOrders}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4">Actions rapides</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100">
                  Ajouter un nouveau produit
                </button>
                <button className="w-full text-left px-4 py-2 bg-green-50 text-green-700 rounded-md hover:bg-green-100">
                  Voir commandes en attente
                </button>
                <button className="w-full text-left px-4 py-2 bg-purple-50 text-purple-700 rounded-md hover:bg-purple-100">
                  Gérer les campagnes marketing
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;