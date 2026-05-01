import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { easeCinematic } from '@/lib/utils';

const cards = [
  {
    title: "Analisar",
    desc: "Compreensão profunda do mercado, concorrentes e do posicionamento atual.",
    img: "/imgs/img2.jpg"
  },
  {
    title: "Planear",
    desc: "Construção de uma rota estratégica alinhada aos objetivos do negócio.",
    img: "/imgs/img3.jpg"
  },
  {
    title: "Executar",
    desc: "Ação rigorosa e consistente baseada no plano estabelecido.",
    img: "/imgs/img8.jpg"
  },
  {
    title: "Melhorar",
    desc: "Fecho do ciclo com análise de dados e otimização contínua.",
    img: "/imgs/img9.jpg"
  }
];

export default function MetodoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const xOffset = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]); // 4 items

  return (
    <section ref={containerRef} id="metodo" className="relative h-[300vh] bg-brand-bg">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        <div className="absolute top-24 left-6 md:left-12 z-20">
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-5xl font-medium text-brand-dark/30 tracking-tight"
            >
              O Método
           </motion.h2>
        </div>

        <motion.div 
          style={{ x: xOffset }} 
          className="flex gap-12 md:gap-32 w-[400vw] px-[10vw] md:px-[30vw] pt-20 items-center"
        >
          {cards.map((card, idx) => (
            <Card key={idx} data={card} progress={smoothProgress} index={idx} total={cards.length} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card({ data, progress, index, total }: { data: any, progress: any, index: number, total: number }) {
  // Logic to determine if this card is currently in the "center" of the view
  // Progress goes from 0 to 1 over the total scroll space.
  // Each card takes up roughly 1/total of the progress.
  
  const step = 1 / (total - 1); // 0, 0.33, 0.66, 1
  const centerPoint = index * step;
  
  // Create an active zone around the center point
  const scale = useTransform(
    progress,
    [centerPoint - step, centerPoint, centerPoint + step],
    [0.85, 1, 0.85]
  );
  
  const opacity = useTransform(
    progress,
    [centerPoint - step, centerPoint, centerPoint + step],
    [0.3, 1, 0.3]
  );

  return (
    <motion.div 
      style={{ scale, opacity }}
      className="w-[80vw] md:w-[40vw] flex-shrink-0 flex flex-col gap-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden relative shadow-2xl">
        <img src={data.img} alt={data.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div>
        <h3 className="font-display text-3xl text-brand-dark font-medium mb-3">{data.title}</h3>
        <p className="font-sans text-lg text-brand-dark/60 leading-relaxed">{data.desc}</p>
      </div>
    </motion.div>
  );
}
