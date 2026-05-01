import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-8 group inline-flex">
                <span className="font-display font-medium text-3xl text-brand-orange tracking-tight">Sócio</span>
                <span className="font-display font-medium text-3xl text-white ml-1 tracking-tight">Digital</span>
            </Link>
            <p className="text-white/50 text-base max-w-sm font-sans tracking-wide leading-relaxed">
              Assessoria estratégica de marketing para empresas B2B e instituições. A sua frente de crescimento global começa aqui.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-sans font-medium text-white mb-6 uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-4 font-sans text-sm text-white/50">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/contactos" className="hover:text-white transition-colors">Contactos</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-sans font-medium text-white mb-6 uppercase tracking-widest text-xs">Contactos</h4>
            <ul className="space-y-5 font-sans text-sm text-white/50">
              <li>
                <a href="mailto:comercialsociodigital@gmail.com" className="hover:text-white transition-colors flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-orange" />
                  comercialsociodigital@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+244927118245" className="hover:text-white transition-colors flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-blue" />
                  +244 927 118 245
                </a>
              </li>
            </ul>
            
            <div className="mt-8 flex items-center gap-4">
              <a href="https://www.instagram.com/sociodigitalao" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://web.facebook.com/profile.php?id=61577903593342" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-brand-blue hover:bg-brand-blue/10 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30 font-sans relative z-10">
          <p>&copy; {new Date().getFullYear()} Sócio Digital. Todos os direitos reservados.</p>
          <div className="flex gap-6 items-center">
            <a href="https://vendaia.site" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Desenvolvido por Vendaia</a>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <Link to="/contactos" className="hover:text-white transition-colors">Termos</Link>
            <Link to="/contactos" className="hover:text-white transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
