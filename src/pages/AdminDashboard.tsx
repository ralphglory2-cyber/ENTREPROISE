import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  Users,
  Eye,
  Edit,
  Trash2,
  Plus,
  DollarSign,
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  Download,
  Bell,
  Search,
  Filter
} from 'lucide-react';
import { AdminStats, Product, Order } from '../types';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'orders' | 'analytics' | 'marketing'>('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'delivered' | 'cancelled'>('all');

  // Mock data - En production, ces données viendraient d'une API
  const stats: AdminStats = {
    pendingOrders: 12,
    deliveredOrders: 87,
    todayOrders: 5,
    weekOrders: 23,
    monthOrders: 156,
    totalVisitors: 2847,
    pageViews: 8934
  };

  const revenueStats = {
    todayRevenue: 2450,
    weekRevenue: 15680,
    monthRevenue: 67890,
    totalRevenue: 234567,
    averageOrder: 435
  };

  const topProducts = [
    { name: 'Support Magnétique 15W', sales: 45, revenue: 13455 },
    { name: 'Batterie 10000mAh', sales: 32, revenue: 14368 },
    { name: 'Protection TPU', sales: 28, revenue: 4172 }
  ];

  const mockOrders: Order[] = [
    {
      id: 'CMD001',
      customer_name: 'Ahmed Benali',
      customer_phone: '+212 661 234 567',
      customer_email: 'ahmed.benali@email.com',
      customer_address: '123 Rue Mohammed V, Quartier Maarif',
      city: 'Casablanca',
      items: [],
      total: 599,
      payment_method: 'cod',
      status: 'pending',
      created_at: '2025-01-10T14:30:00Z'
    },
    {
      id: 'CMD002',
      customer_name: 'Fatima Zahra El Mansouri',
      customer_phone: '+212 662 345 678',
      customer_email: 'fatima.elmansouri@email.com',
      customer_address: '456 Avenue Hassan II, Agdal',
      city: 'Rabat',
      items: [],
      total: 299,
      payment_method: 'paypal',
      status: 'delivered',
      created_at: '2025-01-09T10:15:00Z'
    },
    {
      id: 'CMD003',
      customer_name: 'Youssef Alami',
      customer_phone: '+212 663 456 789',
      customer_email: 'youssef.alami@email.com',
      customer_address: '789 Boulevard Zerktouni, Gueliz',
      city: 'Marrakech',
      items: [],
      total: 449,
      payment_method: 'cod',
      status: 'pending',
      created_at: '2025-01-10T16:45:00Z'
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
    },
    {
      id: '2',
      name: '2 Pièces Boîtier de Protection Batterie Externe',
      category: 'protections',
      price: 149,
      originalPrice: 199,
      description: 'Matériau TPU, caoutchouc souple mat.',
      images: ['https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg'],
      stock: 0,
      featured: true,
      created_at: '2025-01-10'
    },
    {
      id: '3',
      name: 'Batterie Externe Magnétique Sans Fil 10 000 mAh',
      category: 'batteries',
      price: 449,
      originalPrice: 599,
      description: 'Charge rapide 22,5W. Affichage LED.',
      images: ['https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg'],
      stock: 3,
      featured: true,
      created_at: '2025-01-10'
    }
  ];

  const updateOrderStatus = (orderId: string, newStatus: 'pending' | 'delivered' | 'cancelled') => {
    console.log(`Commande ${orderId} mise à jour vers ${newStatus}`);
    // En production, ceci ferait un appel API
  };

  const handleLogout = () => {
    window.location.href = '/';
  };

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = order.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock size={16} />;
      case 'delivered': return <CheckCircle size={16} />;
      case 'cancelled': return <XCircle size={16} />;
      default: return <AlertTriangle size={16} />;
    }
  };

  const DashboardOverview = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Commandes en attente</p>
              <p className="text-3xl font-bold text-orange-600">{stats.pendingOrders}</p>
              <p className="text-sm text-gray-500 mt-1">+3 depuis hier</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl">
              <Clock className="text-orange-600" size={24} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Commandes livrées</p>
              <p className="text-3xl font-bold text-green-600">{stats.deliveredOrders}</p>
              <p className="text-sm text-gray-500 mt-1">+12 cette semaine</p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <CheckCircle className="text-green-600" size={24} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">CA du mois</p>
              <p className="text-3xl font-bold text-blue-600">{revenueStats.monthRevenue.toLocaleString()} DH</p>
              <p className="text-sm text-gray-500 mt-1">≈ {Math.round(revenueStats.monthRevenue / 11)} €</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-xl">
              <DollarSign className="text-blue-600" size={24} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Visiteurs totaux</p>
              <p className="text-3xl font-bold text-purple-600">{stats.totalVisitors.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-1">{stats.pageViews.toLocaleString()} pages vues</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Users className="text-purple-600" size={24} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-6">Chiffre d'affaires</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Aujourd'hui</span>
              <div className="text-right">
                <span className="font-bold text-lg">{revenueStats.todayRevenue} DH</span>
                <p className="text-sm text-gray-500">≈ {Math.round(revenueStats.todayRevenue / 11)} €</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cette semaine</span>
              <div className="text-right">
                <span className="font-bold text-lg">{revenueStats.weekRevenue.toLocaleString()} DH</span>
                <p className="text-sm text-gray-500">≈ {Math.round(revenueStats.weekRevenue / 11)} €</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Ce mois</span>
              <div className="text-right">
                <span className="font-bold text-lg">{revenueStats.monthRevenue.toLocaleString()} DH</span>
                <p className="text-sm text-gray-500">≈ {Math.round(revenueStats.monthRevenue / 11)} €</p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-medium">Panier moyen</span>
              <span className="font-bold text-xl text-blue-600">{revenueStats.averageOrder} DH</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-6">Produits les plus vendus</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-black">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sales} ventes</p>
                  </div>
                </div>
                <span className="font-bold text-green-600">{product.revenue.toLocaleString()} DH</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-black mb-6">Actions rapides</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setActiveTab('orders')}
            className="p-4 bg-orange-50 text-orange-700 rounded-xl hover:bg-orange-100 transition-colors text-left"
          >
            <Clock className="mb-2" size={24} />
            <p className="font-semibold">Commandes en attente</p>
            <p className="text-sm opacity-75">{stats.pendingOrders} à traiter</p>
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className="p-4 bg-red-50 text-red-700 rounded-xl hover:bg-red-100 transition-colors text-left"
          >
            <AlertTriangle className="mb-2" size={24} />
            <p className="font-semibold">Stock faible</p>
            <p className="text-sm opacity-75">3 produits à réapprovisionner</p>
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className="p-4 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors text-left"
          >
            <BarChart3 className="mb-2" size={24} />
            <p className="font-semibold">Voir analytics</p>
            <p className="text-sm opacity-75">Trafic et conversions</p>
          </button>
        </div>
      </div>
    </div>
  );

  const OrdersManagement = () => (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher par nom ou numéro de commande..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tous les statuts</option>
              <option value="pending">En attente</option>
              <option value="delivered">Livrées</option>
              <option value="cancelled">Annulées</option>
            </select>
          </div>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Download size={20} />
            <span>Exporter</span>
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-black">Gestion des commandes ({filteredOrders.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commande
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Paiement
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-black">{order.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium text-black">{order.customer_name}</div>
                      <div className="text-sm text-gray-500">{order.customer_phone}</div>
                      <div className="text-sm text-gray-500">{order.city}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-bold text-lg">{order.total} DH</div>
                    <div className="text-sm text-gray-500">≈ {Math.round(order.total / 11)} €</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.payment_method === 'cod' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {order.payment_method === 'cod' ? 'Livraison' : 'PayPal'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full items-center space-x-1 ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1">
                        {order.status === 'pending' ? 'En attente' : 
                         order.status === 'delivered' ? 'Livrée' : 'Annulée'}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(order.created_at).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      {order.status === 'pending' && (
                        <button
                          onClick={() => updateOrderStatus(order.id, 'delivered')}
                          className="bg-green-100 text-green-700 px-3 py-1 rounded-lg hover:bg-green-200 transition-colors text-xs font-medium"
                        >
                          Marquer livrée
                        </button>
                      )}
                      <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200 transition-colors text-xs font-medium">
                        Détails
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const ProductsManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-bold text-black">Gestion des produits</h3>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 flex items-center space-x-2 font-semibold">
            <Plus size={20} />
            <span>Ajouter produit</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produit
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catégorie
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                      />
                      <div>
                        <div className="font-medium text-black">
                          {product.name.substring(0, 40)}...
                        </div>
                        <div className="text-sm text-gray-500 capitalize">{product.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-bold text-lg">{product.price} DH</div>
                    {product.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        {product.originalPrice} DH
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className={`font-bold text-lg ${
                        product.stock === 0 ? 'text-red-600' : 
                        product.stock <= 5 ? 'text-orange-600' : 'text-green-600'
                      }`}>
                        {product.stock}
                      </span>
                      <div className="flex space-x-1">
                        <button className="bg-gray-100 text-gray-600 w-8 h-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-bold">
                          -
                        </button>
                        <button className="bg-gray-100 text-gray-600 w-8 h-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-bold">
                          +
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 capitalize">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      product.stock === 0 ? 'bg-red-100 text-red-800' :
                      product.stock <= 5 ? 'bg-orange-100 text-orange-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {product.stock === 0 ? 'Rupture' : 
                       product.stock <= 5 ? 'Stock faible' : 'En stock'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="bg-blue-100 text-blue-700 p-2 rounded-lg hover:bg-blue-200 transition-colors">
                        <Edit size={16} />
                      </button>
                      <button className="bg-red-100 text-red-700 p-2 rounded-lg hover:bg-red-200 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const AnalyticsView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-6">Trafic du site</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Visiteurs aujourd'hui</span>
              <span className="font-bold text-2xl text-blue-600">247</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Pages vues aujourd'hui</span>
              <span className="font-bold text-2xl text-green-600">892</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Taux de conversion</span>
              <span className="font-bold text-2xl text-purple-600">3.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Durée moyenne session</span>
              <span className="font-bold text-2xl text-orange-600">4m 32s</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-6">Sources de trafic</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span>Google</span>
              </div>
              <span className="font-bold">45%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                <span>Instagram</span>
              </div>
              <span className="font-bold">28%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <span>Facebook</span>
              </div>
              <span className="font-bold">15%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span>YouTube</span>
              </div>
              <span className="font-bold">8%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                <span>Autres</span>
              </div>
              <span className="font-bold">4%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-black mb-6">Performance des campagnes</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Campagne</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Plateforme</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Clics</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Conversions</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">ROI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Promo Batteries</td>
                <td className="py-3 px-4">Facebook</td>
                <td className="py-3 px-4">1,247</td>
                <td className="py-3 px-4">23</td>
                <td className="py-3 px-4 text-green-600 font-bold">+180%</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Supports Magnétiques</td>
                <td className="py-3 px-4">Instagram</td>
                <td className="py-3 px-4">892</td>
                <td className="py-3 px-4">18</td>
                <td className="py-3 px-4 text-green-600 font-bold">+145%</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Collection Hiver</td>
                <td className="py-3 px-4">YouTube</td>
                <td className="py-3 px-4">456</td>
                <td className="py-3 px-4">7</td>
                <td className="py-3 px-4 text-orange-600 font-bold">+85%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const MarketingView = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-black mb-6">Campagnes actives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">Promo Batteries 50%</h4>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Active</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Facebook & Instagram • Expire le 15/01/2025</p>
            <div className="flex justify-between text-sm">
              <span>Budget: 2,000 DH</span>
              <span>Dépensé: 1,247 DH</span>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">Supports Magnétiques</h4>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">En cours</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">YouTube • Expire le 20/01/2025</p>
            <div className="flex justify-between text-sm">
              <span>Budget: 1,500 DH</span>
              <span>Dépensé: 892 DH</span>
            </div>
          </div>
        </div>
        
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 font-semibold">
          Créer nouvelle campagne
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-black mb-6">Réseaux sociaux</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <div className="text-2xl font-bold text-blue-600">12.5K</div>
            <div className="text-sm text-gray-600">Followers Facebook</div>
          </div>
          <div className="text-center p-4 bg-pink-50 rounded-xl">
            <div className="text-2xl font-bold text-pink-600">8.9K</div>
            <div className="text-sm text-gray-600">Followers Instagram</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-xl">
            <div className="text-2xl font-bold text-red-600">3.2K</div>
            <div className="text-sm text-gray-600">Abonnés YouTube</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-gray-600">1.8K</div>
            <div className="text-sm text-gray-600">Followers TikTok</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-black">ReenweezElectro</h1>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Admin</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-black transition-colors">
                <Bell size={24} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <LogOut size={20} />
                <span>Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 bg-white rounded-2xl p-2 mb-8 shadow-lg border border-gray-100">
          {[
            { id: 'dashboard', label: 'Tableau de bord', icon: BarChart3 },
            { id: 'orders', label: 'Commandes', icon: ShoppingCart },
            { id: 'products', label: 'Produits', icon: Package },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'marketing', label: 'Marketing', icon: Users }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                  activeTab === tab.id
                    ? 'bg-black text-white shadow-lg'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'dashboard' && <DashboardOverview />}
          {activeTab === 'orders' && <OrdersManagement />}
          {activeTab === 'products' && <ProductsManagement />}
          {activeTab === 'analytics' && <AnalyticsView />}
          {activeTab === 'marketing' && <MarketingView />}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;