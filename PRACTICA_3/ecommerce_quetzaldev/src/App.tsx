import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy-loaded pages — each page is a separate JS chunk loaded on demand
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Catalog = lazy(() => import('./pages/Catalog').then(m => ({ default: m.Catalog })));
const Cart = lazy(() => import('./pages/Cart').then(m => ({ default: m.Cart })));
const Checkout = lazy(() => import('./pages/Checkout').then(m => ({ default: m.Checkout })));
const Confirmation = lazy(() => import('./pages/Confirmation').then(m => ({ default: m.Confirmation })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Legal = lazy(() => import('./pages/Legal').then(m => ({ default: m.Legal })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Minimal loading fallback shown while a page chunk is fetching
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#F7F8F5]">
    <div className="w-8 h-8 border-[3px] border-[#2D7A3A]/20 border-t-[#2D7A3A] rounded-full animate-spin" />
  </div>
);

// Wrapper that re-mounts on each route change to trigger the page-in animation
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmacion" element={<Confirmation />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacidad" element={<Legal />} />
          <Route path="/terminos" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <ToastProvider>
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </ToastProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
