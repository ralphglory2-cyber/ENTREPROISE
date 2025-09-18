import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (password: string) => boolean;
  onClose: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = onLogin(password);
    if (!isValid) {
      setError('Mot de passe incorrect');
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
      >
        <div className="text-center mb-6">
          <Lock className="mx-auto text-gray-600 mb-4" size={48} />
          <h2 className="text-2xl font-bold text-black">Administration</h2>
          <p className="text-gray-600 mt-2">Accès restreint aux administrateurs</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              Se connecter
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;