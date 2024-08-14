import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './AuthProvider.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './pages/about us/about.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
);
