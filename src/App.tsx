/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Servicos from './pages/Servicos';
import Contactos from './pages/Contactos';
import ScrollToTop from './components/ScrollToTop';
import AbstractShapes from './components/AbstractShapes';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen selection:bg-brand-orange/20 selection:text-brand-orange">
        <div className="noise-overlay"></div>
        <AbstractShapes />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<SobreNos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contactos" element={<Contactos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
