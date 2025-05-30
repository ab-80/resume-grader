import { Routes, Route, Navigate } from 'react-router-dom';
import React, { createContext, useState, useEffect, useContext } from 'react';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setAuth({ token: storedToken });
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setAuth({ token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  return auth ? children : <Navigate to="/register" />;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute>{<Dashboard />}</ProtectedRoute>} />
        <Route path="/" element={<Navigate to="/register" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;