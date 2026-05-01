import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const cases = [
  {
    title: "Mastercontas",
    subtitle: "Reconhecimento & Colaboração",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop"
  },
  {
    title: "Mulheres de Contas",
    subtitle: "Empoderamento & Educação Financeira",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Impacto Angolano",
    subtitle: "Tecnologia & Desenvolvimento",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function StickyReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} id="casos" className="relative h-[400vh] bg-brand-dark text-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {cases.map((proj, idx) => {
          // Calculate when each item should be visible
          const start = idx / cases.length;
          const end = (idx + 1) / cases.length;
          const fadeStart = start;
          const fadeEnd = start + 0.1;
          const fadeOutStart = end - 0.1;
          const fadeOutEnd = end;

          const opacity = useTransform(
            scrollYProgress,
            [fadeStart, fadeEnd, fadeOutStart, fadeOutEnd],
            [0, 1, 1, 0]
          );

          const scale = useTransform(
            scrollYProgress,
            [fadeStart, fadeOutEnd],
            [1.05, 1]
          );

          const yText = useTransform(
            scrollYProgress,
            [fadeStart, fadeEnd],
            [40, 0]
          );

          return (
            <motion.div key={idx} style={{ opacity }} className="absolute inset-0 w-full h-full flex flex-col justify-center items-center p-6 text-center">
              <motion.div style={{ scale }} className="absolute inset-0 w-full h-full z-0">
                 <img src={proj.img} alt={proj.title} className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
              </motion.div>
              
              <div className="relative z-10 flex flex-col items-center">
                 <motion.span style={{ y: yText }} className="text-brand-orange uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
                    {proj.subtitle}
                 </motion.span>
                 <motion.h2 style={{ y: yText }} className="font-display text-6xl md:text-8xl font-medium tracking-tight text-white mb-8">
                    {proj.title}
                 </motion.h2>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
