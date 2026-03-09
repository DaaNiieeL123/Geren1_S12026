// C:\Users\danie\Desktop\PRACTICA2 GEREN1\PRACTICA_3\ecommerce_quetzaldev\src\App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Confirmation } from './pages/Confirmation';
import { About } from './pages/About';
import { Legal } from './pages/Legal';

import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <ToastProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalog />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/confirmacion" element={<Confirmation />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacidad" element={<Legal />} />
              <Route path="/terminos" element={<Legal />} />
            </Routes>
          </Layout>
        </ToastProvider>
      </CartProvider>
    </Router>
  );
}

export default App;

