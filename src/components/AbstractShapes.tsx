import { motion, useScroll, useTransform } from 'motion/react';

export default function AbstractShapes() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Light Blue #66CDD9 - Abstract geometry */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }} 
        className="absolute top-[15%] -left-[10%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full border border-[#66CDD9]/20 bg-[#66CDD9]/[0.015] backdrop-blur-3xl"
      />
      
      {/* Orange #F28627 - Soft glow */}
      <motion.div 
        style={{ y: y2, rotate: rotate2 }} 
        className="absolute bottom-[20%] -right-[10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-[40px] bg-gradient-to-br from-[#F28627]/[0.03] to-transparent blur-[8px] mix-blend-multiply rotate-12"
      />

      {/* New Shapes for richness */}
      <motion.div 
        style={{ y: y1, rotate: rotate2 }}
        className="absolute top-[40%] -right-[5%] w-64 h-64 border border-[#66CDD9]/10 rounded-[60px] rotate-45"
      />
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[10%] left-[5%] w-32 h-32 bg-[#F28627]/5 rounded-full blur-[40px]"
      />

      {/* Floating accents */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ y: y1 }}
        className="absolute top-[60%] left-[20%] w-32 h-32 bg-[#66CDD9]/5 rounded-full blur-[60px]"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ y: y2 }}
        className="absolute top-[30%] right-[15%] w-48 h-48 bg-[#F28627]/5 rounded-full blur-[80px]"
      />
      
      {/* Subtle lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    </div>
  );
}
