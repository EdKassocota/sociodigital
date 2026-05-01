import { motion } from 'motion/react';
import { easeCinematic } from '@/lib/utils';
import CTA from '@/components/sections/CTA';

import SEO from '@/components/SEO';

export default function SobreNos() {
  return (
    <div className="bg-brand-bg relative overflow-hidden">
      <SEO 
        title="Sobre Nós" 
        description="Conheça a missão e os valores da Sócio Digital. Somos especialistas em construir autoridade digital para o setor B2B e instituições."
      />
      {/* Intro section */}
       <section className="relative pt-48 pb-20">
        <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-[#F28627]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30vh] h-[30vh] bg-[#66CDD9]/5 rounded-[40px] rotate-45 blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: easeCinematic }}
          >
            <span className="text-[#F28627] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-6 block">Sobre a Sócio Digital</span>
            <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-brand-dark text-balance mb-8">
              A arquitetura da sua <span className="text-[#66CDD9]">reputação</span> digital.
            </h1>
            <p className="font-sans text-xl text-brand-dark/60 leading-relaxed text-balance mx-auto">
              Somos uma assessoria estratégica dedicada exclusivamente ao universo B2B e instituições de renome, onde confiança e clareza são os ativos mais valiosos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Image Break */}
       <section className="w-full px-6 md:px-12 max-w-[100rem] mx-auto py-1 relative z-10">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: easeCinematic }}
          className="aspect-video w-full rounded-2xl overflow-hidden relative shadow-2xl z-20 bg-white"
        >
          <img src="/imgs/img1.jpg" alt="Equipa Sócio Digital" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#66CDD9]/20 to-transparent mix-blend-overlay" />
        </motion.div>
      </section>

      {/* Manifesto / Mission */}
       <section className="py-8 bg-white relative">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 border border-[#66CDD9]/30 rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-16 h-16 bg-[#F28627]/10 rotate-12 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: easeCinematic }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-brand-dark mb-8">
              Nossa Missão
            </h2>
            <div className="w-16 h-1 bg-[#F28627] mb-10" />
            <p className="font-sans text-xl text-brand-dark/70 leading-relaxed mb-6 font-light">
              Contribuir para que empresas B2B desenvolvam uma presença digital estratégica, totalmente alinhada com a sua reputação offline, assegurando a coerência da marca.
            </p>
            <p className="font-sans text-xl text-brand-dark/70 leading-relaxed font-light">
              O digital não pode ser um ensaio. Cada ponto de contacto importa e é por isso que tratamos a sua imagem com a responsabilidade e precisão que ela exige.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: easeCinematic, delay: 0.2 }}
            className="bg-brand-dark text-white rounded-2xl p-12 relative overflow-hidden"
          >
            <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-[#66CDD9]/20 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-50px] left-[-30px] w-[150px] h-[150px] bg-[#F28627]/20 blur-[50px] rounded-full pointer-events-none" />
            <h2 className="font-display text-3xl font-medium mb-8 relative z-10">Valores</h2>
            <ul className="space-y-6 relative z-10">
              {[
                { t: "Autoridade", d: "Construímos bases sólidas, não modismos." },
                { t: "Estratégia", d: "Cada movimento tem uma métrica e um propósito." },
                { t: "Clareza", d: "Comunicação direta, transparente e executiva." },
                { t: "Excelência", d: "Entrega cinematográfica em todos os canais." }
              ].map((v, i) => (
                <li key={i} className="flex flex-col gap-2 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <strong className="text-[#F28627] font-sans font-medium uppercase tracking-wide text-sm">{v.t}</strong>
                  <span className="font-sans text-white/70">{v.d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
