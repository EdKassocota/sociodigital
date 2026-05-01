import { motion } from 'motion/react';
import { easeCinematic } from '@/lib/utils';

export default function Trailer() {
  const images = [
    "/imgs/img8.jpg",
    "/imgs/img9.jpg",
    "/imgs/img10.jpg"
  ];

  return (
    <section className="py-32 md:py-48 bg-brand-bg relative overflow-hidden grid-pattern">
      <div className="absolute top-1/2 left-[20%] w-64 h-64 border border-[#F28627]/20 rounded-full rotate-45 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-32 h-32 bg-[#66CDD9]/10 rounded-full blur-[40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: easeCinematic }}
           className="mb-20 text-center"
        >
           <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-brand-dark mb-6">
             Uma visão <span className="text-[#F28627]">global</span>, <br className="hidden md:block"/> aplicada localmente.
           </h2>
           <p className="font-sans text-lg text-brand-dark/50 max-w-2xl mx-auto">
             Não criamos apenas posts. Arquitetamos narrativas de autoridade para o seu segmento.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ clipPath: "inset(0 0 100% 0)", filter: "blur(10px)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1], // slightly different cinematic curve for mask reveal
                delay: idx * 0.2
              }}
              className="aspect-[4/5] object-cover rounded-xl overflow-hidden relative shadow-2xl"
            >
               <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={img} 
                  alt="Processo" 
                  className="w-full h-full object-cover" 
               />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
