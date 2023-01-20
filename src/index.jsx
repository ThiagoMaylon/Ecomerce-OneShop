import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import App from './Home/App';
import { Carrinho } from './pages/Carrinho';
import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/car' element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
    
    <GlobalStyle />
  </React.StrictMode>
);

