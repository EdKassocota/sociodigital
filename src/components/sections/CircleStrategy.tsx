import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { easeCinematic } from '@/lib/utils';

const cards = [
  { title: "Direção Estratégica Clara", num: "01", desc: "Sabemos exatamente para onde a sua marca caminha e como vai lá chegar no ambiente digital." },
  { title: "Comunicação Consistente", num: "02", desc: "Mensagens coesas em todos os canais, refletindo a excelência do seu serviço B2B." },
  { title: "Maior Autoridade de Mercado", num: "03", desc: "Posicionamento como thought leader no seu setor, ditando as tendências e captando a confiança." },
  { title: "Resultados Mensuráveis", num: "04", desc: "Decisões baseadas em dados, garantindo retorno corporativo sobre cada ação online." },
  { title: "Ativo de Crescimento", num: "05", desc: "Transformamos likes em leads e atenção em reputação palpável na sua indústria." }
];

export default function Resultados() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-brand-bg relative border-t border-brand-dark/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <div className="w-full lg:w-5/12 sticky top-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: easeCinematic }}
            >
              <span className="text-brand-orange uppercase tracking-[0.2em] text-sm font-semibold mb-6 block">O Resultado</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-brand-dark leading-[1.1] mb-8 text-balance">
                A presença digital deixa de ser improviso.
              </h2>
              <p className="font-sans text-xl text-brand-dark/60 leading-relaxed font-light">
                Com o Método Sócio Digital, a sua empresa adquire um ativo corporativo, transformando reputação sólida num alcance influente e direcionado.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col relative pb-32">
             {cards.map((card, idx) => (
                <Card key={idx} card={card} index={idx} total={cards.length} />
             ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}

function Card({ card, index, total }: { card: any, index: number, total: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "start 30%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  // Adjust top offset for sticky stacking effect
  const stickyTop = 160 + (index * 24);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, top: `${stickyTop}px` }}
      className="sticky mb-8 bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] border border-brand-dark/5 overflow-hidden flex flex-col justify-center min-h-[280px]"
    >
      <div className="absolute top-0 right-0 p-8 text-brand-bg md:text-brand-dark/[0.03] font-display text-8xl md:text-[160px] font-bold leading-none translate-x-8 md:translate-x-12 -translate-y-4 md:-translate-y-8 select-none pointer-events-none">
        {card.num}
      </div>
      
      <div className="relative z-10 max-w-lg">
        <h3 className="font-display text-2xl md:text-3xl font-medium text-brand-dark mb-4 drop-shadow-sm">
          {card.title}
        </h3>
        <p className="font-sans text-lg md:text-xl text-brand-dark/60 leading-relaxed font-light">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}
