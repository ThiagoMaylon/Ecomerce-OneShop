import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header';
import App from './Home/App';
import { Carrinho } from './pages/Carrinho';
import { DetalheProduto } from './pages/DetalheProduto';
import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/car' element={<Carrinho />} />
        <Route path="/prod/:id" element={<DetalheProduto/>} />
      </Routes>
    </BrowserRouter>
    
    <GlobalStyle />
  </React.StrictMode>
);

