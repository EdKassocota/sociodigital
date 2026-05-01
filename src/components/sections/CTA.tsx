import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { easeCinematic } from '@/lib/utils';

export default function CTA() {
  return (
    <section className="relative py-48 bg-white overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-bg via-white to-white opacity-80" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: easeCinematic }}
          className="font-display text-5xl md:text-7xl font-medium tracking-tight text-brand-dark mb-12 text-balance leading-tight"
        >
          Pronto para transformar o seu ativo digital?
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: easeCinematic, delay: 0.2 }}
        >
           <Link to="/contactos" className="group relative px-10 py-5 bg-brand-orange overflow-hidden rounded-full inline-flex items-center gap-4 hover:shadow-[0_0_40px_rgba(242,104,34,0.4)] transition-shadow duration-500">
             <span className="relative z-10 font-sans font-semibold text-white tracking-wider text-sm uppercase">Falar com Consultor</span>
             
             {/* Glow effect on hover */}
             <div className="absolute inset-0 bg-white/20 scale-x-0 origin-left transition-transform duration-[800ms] group-hover:scale-x-100 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />
             
             {/* Arrow Icon */}
             <div className="relative z-10 w-6 h-6 bg-white text-brand-orange rounded-full flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
             </div>
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
