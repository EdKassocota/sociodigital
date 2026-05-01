import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { easeCinematic } from '@/lib/utils';

import SEO from '@/components/SEO';

export default function Contactos() {
  return (
    <div className="bg-brand-bg relative overflow-hidden min-h-screen pt-48 pb-32">
      <SEO 
        title="Contactos" 
        description="Entre em contacto com a Sócio Digital. Agende uma reunião de diagnóstico para a sua estratégia de marketing B2B e autoridade digital."
      />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Text & Information */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: easeCinematic }}
            >
              <span className="text-brand-orange font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-6 block">Fale Connosco</span>
              <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-brand-dark text-balance mb-8">
                Inicie a sua<br />transformação.
              </h1>
              <p className="font-sans text-xl text-brand-dark/60 leading-relaxed max-w-md mb-16 font-light">
                Agende uma reunião de diagnóstico. Compreendemos o seu negócio B2B antes de projetarmos o caminho.
              </p>
            </motion.div>

            <div className="space-y-12">
              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, ease: easeCinematic, delay: 0.3 }}
                 className="flex flex-col gap-8"
              >
                 <a href="mailto:comercialsociodigital@gmail.com" className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-white border border-brand-dark/10 flex items-center justify-center text-brand-orange shadow-lg shadow-black/5 group-hover:border-brand-orange transition-colors">
                       <Mail className="w-6 h-6" />
                    </div>
                    <div>
                       <span className="block text-sm font-sans uppercase text-brand-dark/50 tracking-wider mb-1">E-mail Corporativo</span>
                       <span className="block font-display text-xl md:text-2xl font-medium text-brand-dark">comercialsociodigital@gmail.com</span>
                    </div>
                 </a>
                 
                 <a href="tel:+244927118245" className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-white border border-brand-dark/10 flex items-center justify-center text-brand-blue shadow-lg shadow-black/5 group-hover:border-brand-blue transition-colors">
                       <Phone className="w-6 h-6" />
                    </div>
                    <div>
                       <span className="block text-sm font-sans uppercase text-brand-dark/50 tracking-wider mb-1">Telefone / Call Center</span>
                       <span className="block font-display text-xl md:text-2xl font-medium text-brand-dark">+244 927 118 245</span>
                    </div>
                 </a>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: easeCinematic, delay: 0.5 }}
                 className="pt-12 border-t border-brand-dark/10"
              >
                <span className="block text-sm font-sans uppercase text-brand-dark/50 tracking-wider mb-6">Nossas Redes</span>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/sociodigitalao" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/5 transition-all shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://web.facebook.com/profile.php?id=61577903593342" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition-all shadow-sm">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeCinematic, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl shadow-brand-dark/5 border border-brand-dark/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-orange/5 blur-[50px] rounded-full" />
            
            <h3 className="font-display text-3xl font-medium text-brand-dark mb-8 relative z-10">Deixe uma mensagem</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                 <label htmlFor="name" className="font-sans text-sm font-medium text-brand-dark/70 uppercase tracking-widest">Nome da Empresa / Entidade</label>
                 <input type="text" id="name" className="w-full bg-brand-bg/50 border border-brand-dark/10 rounded-lg px-4 py-3 font-sans text-brand-dark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="A sua empresa" />
              </div>
              <div className="space-y-2">
                 <label htmlFor="email" className="font-sans text-sm font-medium text-brand-dark/70 uppercase tracking-widest">E-mail Corporativo</label>
                 <input type="email" id="email" className="w-full bg-brand-bg/50 border border-brand-dark/10 rounded-lg px-4 py-3 font-sans text-brand-dark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="email@empresa.com" />
              </div>
              <div className="space-y-2">
                 <label htmlFor="mensagem" className="font-sans text-sm font-medium text-brand-dark/70 uppercase tracking-widest">O que procura?</label>
                 <textarea id="mensagem" rows={4} className="w-full bg-brand-bg/50 border border-brand-dark/10 rounded-lg px-4 py-3 font-sans text-brand-dark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-none" placeholder="Breve descrição da sua necessidade..."></textarea>
              </div>
              
              <button className="w-full !mt-10 group relative px-8 py-4 bg-brand-dark overflow-hidden rounded-lg inline-flex items-center justify-center gap-3">
                 <span className="relative z-10 font-sans font-medium text-white tracking-wider text-sm uppercase">Enviar Mensagem</span>
                 <div className="absolute inset-0 bg-brand-orange scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
              </button>
            </form>

          </motion.div>

        </div>
      </div>
    </div>
  );
}
