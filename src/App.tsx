/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import AbstractShapes from './components/AbstractShapes';

const Home = lazy(() => import('./pages/Home'));
const SobreNos = lazy(() => import('./pages/SobreNos'));
const Servicos = lazy(() => import('./pages/Servicos'));
const Contactos = lazy(() => import('./pages/Contactos'));

const PageLoader = () => (
  <div className="fixed inset-0 bg-brand-bg z-[100] flex items-center justify-center">
    <div className="w-12 h-px bg-brand-orange animate-pulse" />
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen selection:bg-brand-orange/20 selection:text-brand-orange">
        <div className="noise-overlay"></div>
        <AbstractShapes />
        <Navbar />
        <main className="relative z-10">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/contactos" element={<Contactos />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
