import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import ShippingPage from './pages/ShippingPage';
import TermsPage from './pages/TermsPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './components/AdminLogin';

function App() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const handleAdminLogin = (password: string) => {
    // Simple password check - in production, this should be more secure
    if (password === 'admin2025') {
      setIsAdminAuthenticated(true);
      setShowAdminLogin(false);
      return true;
    }
    return false;
  };

  const handleAdminClick = () => {
    if (isAdminAuthenticated) {
      // If already authenticated, redirect to admin dashboard
      window.location.href = '/admin';
    } else {
      setShowAdminLogin(true);
    }
  };

  if (isAdminAuthenticated && window.location.pathname === '/admin') {
    return <AdminDashboard />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header onAdminClick={handleAdminClick} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
        
        {showAdminLogin && (
          <AdminLogin
            onLogin={handleAdminLogin}
            onClose={() => setShowAdminLogin(false)}
          />
        )}
      </div>
    </Router>
  );
}

export default App;