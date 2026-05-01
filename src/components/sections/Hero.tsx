import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { easeCinematic } from '@/lib/utils';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-brand-bg via-white to-brand-bg/50 pt-24 grid-pattern"
    >
      {/* Background glow for atmosphere */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#66CDD9]/10 rounded-full blur-[120px] mix-blend-multiply opacity-60" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-[#F28627]/10 rounded-full blur-[100px] mix-blend-multiply opacity-50" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 z-10 relative mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-6 flex flex-col z-20">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(12px)", y: 40 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1.2, ease: easeCinematic, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] text-brand-dark mb-6 text-balance relative"
            >
              Transformamos a sua <span className="text-[#F28627] relative whitespace-nowrap">
                reputação
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#66CDD9]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                </svg>
              </span> em autoridade digital.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1, ease: easeCinematic, delay: 0.3 }}
              className="text-lg md:text-xl text-brand-dark/60 font-sans tracking-wide leading-relaxed max-w-xl text-balance mb-10"
            >
              A Sócio Digital oferece assessoria estratégica para operações B2B globais que não têm tempo para amadorismo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeCinematic, delay: 0.5 }}
            >
              <Link to="/contactos" className="group relative px-8 py-4 bg-brand-dark overflow-hidden rounded-full inline-flex items-center gap-3">
                <span className="relative z-10 font-sans font-medium text-white tracking-wider text-sm uppercase">Fale Connosco</span>
                <div className="relative z-10 w-8 h-px bg-white/50 group-hover:w-16 group-hover:bg-[#F28627] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                {/* Fill effect */}
                <div className="absolute inset-0 bg-brand-dark scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left z-0" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative perspective-[1200px]">
            <motion.div
              initial={{ scale: 1.15, rotateY: 8, opacity: 0, filter: "blur(20px)" }}
              animate={{ scale: 1, rotateY: -2, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.8, ease: easeCinematic, delay: 0.2 }}
              style={{ y, opacity }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] object-cover shadow-2xl shadow-black/5 border border-black/5 bg-white"
            >
              <img
                src="/imgs/img10.jpg"
                alt="Sócio Digital Hero"
                className="w-full h-full object-cover scale-[1.05] origin-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#66CDD9]/20 via-transparent to-[#F28627]/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
