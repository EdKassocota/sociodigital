import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { easeCinematic } from '@/lib/utils';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 flex justify-center ${
          scrolled ? "bg-brand-bg/80 backdrop-blur-md border-b border-black/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <nav className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group relative z-[60]">
            <img src="/logo.png" alt="Sócio Digital Logo" className="h-9 w-auto object-contain" />
            <div className="flex items-center font-display font-medium text-xl md:text-2xl tracking-tighter">
              <span className="text-[#F28627]">Sócio</span>
              <span className="text-[#66CDD9] ml-1">Digital</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-brand-dark/70 tracking-wide">
              <Link to="/" className="hover:text-brand-dark transition-colors">Início</Link>
              <Link to="/sobre" className="hover:text-brand-dark transition-colors">Sobre Nós</Link>
              <Link to="/servicos" className="hover:text-brand-dark transition-colors">Serviços</Link>
              <Link to="/contactos" className="hover:text-brand-dark transition-colors">Contactos</Link>
          </div>
          
          <Link to="/contactos" className="hidden md:block px-6 py-2.5 rounded-full bg-[#F28627] text-white font-medium text-sm tracking-wide overflow-hidden relative group">
            <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full block">Fale Connosco</span>
            <span className="absolute inset-x-0 top-full z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full px-6 py-2.5 block text-center">Fale Connosco</span>
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden relative z-[60] p-2 -mr-2 text-brand-dark"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: easeCinematic }}
            className="fixed inset-0 z-[100] bg-brand-bg flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-black/5">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Sócio Digital Logo" className="h-9 w-auto object-contain" />
                <div className="flex items-center font-display font-medium text-xl tracking-tighter">
                  <span className="text-[#F28627]">Sócio</span>
                  <span className="text-[#66CDD9] ml-1">Digital</span>
                </div>
              </div>
              <button onClick={closeMenu} className="p-2 -mr-2 text-brand-dark">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-8 relative overflow-hidden">
               {/* Abstract shapes inside menu */}
               <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#66CDD9]/10 rounded-full blur-[60px] pointer-events-none" />
               <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#F28627]/10 rounded-full blur-[60px] pointer-events-none" />

               <Link onClick={closeMenu} to="/" className="font-display text-4xl font-medium text-brand-dark p-2 hover:text-brand-orange transition-colors">Início</Link>
               <Link onClick={closeMenu} to="/sobre" className="font-display text-4xl font-medium text-brand-dark p-2 hover:text-brand-orange transition-colors">Sobre Nós</Link>
               <Link onClick={closeMenu} to="/servicos" className="font-display text-4xl font-medium text-brand-dark p-2 hover:text-brand-orange transition-colors">Serviços</Link>
               <Link onClick={closeMenu} to="/contactos" className="font-display text-4xl font-medium text-brand-dark p-2 hover:text-brand-orange transition-colors">Contactos</Link>
               
               <Link onClick={closeMenu} to="/contactos" className="mt-8 px-8 py-4 rounded-full bg-[#F28627] text-white font-medium text-sm tracking-wide">
                 Fale Connosco
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
