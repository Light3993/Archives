import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { School, User, Mail, Lock, BookOpen } from 'lucide-react';

interface LoginForm {
  username: string;
  password: string;
  filiere: string;
}

interface RegisterForm {
  username: string;
  email: string;
  password: string;
  filiere: string;
}

const filieres = ['IABD', 'GL', 'GE', 'GC', 'GM', 'IS'];

export const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: '',
    password: '',
    filiere: ''
  });
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    username: '',
    email: '',
    password: '',
    filiere: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous ajouterez la logique de connexion
    console.log('Login:', loginForm);
    localStorage.setItem('user', JSON.stringify({ ...loginForm }));
    navigate('/');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous ajouterez la logique d'inscription
    console.log('Register:', registerForm);
    localStorage.setItem('user', JSON.stringify({ ...registerForm }));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <div className="text-center mb-8">
          <School className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            EPL Archives
          </h2>
          <p className="mt-2 text-gray-600">
            {isLogin ? 'Connectez-vous à votre compte' : 'Créez votre compte'}
          </p>
        </div>

        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom d'utilisateur
              </label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  required
                  className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  required
                  className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Filière
              </label>
              <div className="mt-1 relative">
                <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  required
                  className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={loginForm.filiere}
                  onChange={(e) => setLoginForm({ ...loginForm, filiere: e.target.value })}
                >
                  <option value="">Sélectionnez une filière</option>
                  {filieres.map((filiere) => (
                    <option key={filiere} value={filiere}>{filiere}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Se connecter
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom d'utilisateur
              </label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  required
                  className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={registerForm.username}
                  onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  required
                  className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  required
                  className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Filière
              </label>
              <div className="mt-1 relative">
                <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  required
                  className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={registerForm.filiere}
                  onChange={(e) => setRegisterForm({ ...registerForm, filiere: e.target.value })}
                >
                  <option value="">Sélectionnez une filière</option>
                  {filieres.map((filiere) => (
                    <option key={filiere} value={filiere}>{filiere}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              S'inscrire
            </button>
          </form>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-700"
          >
            {isLogin ? "Pas encore de compte ? S'inscrire" : "Déjà un compte ? Se connecter"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};