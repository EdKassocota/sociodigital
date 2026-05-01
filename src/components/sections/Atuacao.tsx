import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { easeCinematic } from '@/lib/utils';

const atuacaoItems = [
  { id: "estrategia", title: "Estratégia de posicionamento digital" },
  { id: "conteudo", title: "Produção de conteúdos audiovisuais" },
  { id: "identidade", title: "Identidade visual para o digital" },
  { id: "redes", title: "Presença em redes profissionais" },
  { id: "eventos", title: "Acompanhamento de eventos" }
];

export default function Atuacao() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id="atuacao" className="py-32 md:py-48 relative bg-white overflow-hidden grid-pattern">
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-[#F28627]/10 rounded-full blur-[80px]" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

          <div className="w-full h-full relative">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: easeCinematic }}
              className="relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-brand-dark/5"
            >
              <motion.img
                style={{ y: imgY }}
                src="/imgs/img8.jpg"
                alt="Produção de Conteúdo Sócio Digital"
                loading="lazy"
                className="w-full h-[120%] object-cover absolute top-[-10%] origin-center"
              />
              <div className="absolute inset-0 bg-[#66CDD9]/10 mix-blend-multiply" />
            </motion.div>
          </div>

          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: easeCinematic }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-brand-dark mb-12">
                A Nossa <span className="text-[#66CDD9]">Atuação</span>
              </h2>
            </motion.div>

            <ul className="space-y-6 md:space-y-8">
              {atuacaoItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    ease: easeCinematic,
                    delay: 0.1 * index
                  }}
                  className="flex items-center group cursor-pointer"
                >
                  <Link to={`/servicos#${item.id}`} className="flex items-center gap-6 w-full">
                    <span className="flex-shrink-0 w-3 h-3 text-[#F28627] group-hover:scale-150 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-sans text-xl md:text-2xl text-brand-dark/80 font-medium tracking-wide group-hover:text-brand-dark transition-colors duration-300">
                      {item.title}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
