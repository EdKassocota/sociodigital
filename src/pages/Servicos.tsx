import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CTA from '@/components/sections/CTA';
import SEO from '@/components/SEO';

const servicos = [
  {
    id: "estrategia",
    title: "Estratégia de Posicionamento Digital",
    caption: "Auditoria & Planeamento",
    desc: "Desenhamos o mapa completo de como a sua empresa será percebida no digital. Avaliamos a concorrência, identificamos o tom de voz ideal e definimos em quais canais corporativos (LinkedIn, websites institucionais) deverá concentrar esforços.",
    img: "/imgs/img3.jpg"
  },
  {
    id: "conteudo",
    title: "Produção de Conteúdos Audiovisuais",
    caption: "Cinematografia B2B",
    desc: "Produção de imagens e vídeos de alto padrão. Cuidamos do guião à captação, focando em mensagens corporativas assertivas, vídeos institucionais, entrevistas com C-Level e cobertura documental que eleva a credibilidade.",
    img: "/imgs/img2.jpg"
  },
  {
    id: "identidade",
    title: "Identidade Visual para o Digital",
    caption: "Design Premium",
    desc: "Garantimos a coerência estética global da sua marca. Desenvolvemos manuais de identidade digital aplicáveis a redes sociais, propostas comerciais e landing pages, mantendo o padrão executivo e evitando distorções criativas.",
    img: "/imgs/img8.jpg"
  },
  {
    id: "redes",
    title: "Presença em Redes Profissionais",
    caption: "Gestão Ativa",
    desc: "O LinkedIn não é o Instagram. Fazemos a gestão e o crescimento estratégico da sua presença corporativa com foco na rede B2B, atuando na curadoria de conteúdos para thought leadership e atração qualitativa de stakeholders.",
    img: "/imgs/img9.jpg"
  },
  {
    id: "eventos",
    title: "Acompanhamento de Eventos",
    caption: "Cobertura Imediata",
    desc: "Garantimos a presença digital e recolha de material em tempo real durante feiras, cimeiras e exposições. A imagem pública da empresa em momentos de networking é registada com sofisticação e partilhada de forma oportuna com os parceiros.",
    img: "/imgs/img10.jpg"
  }
];

export default function Servicos() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
           const offset = 80;
           const targetY = element.getBoundingClientRect().top + window.scrollY - offset;
           window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }, 500);
    }
  }, [hash]);

  return (
    <div className="bg-brand-bg relative overflow-hidden">
      <SEO 
        title="Nossos Serviços" 
        description="Estratégia de posicionamento, produção audiovisual B2B, identidade visual premium e gestão de redes profissionais."
      />
      <HeroSection />
      
      <div className="relative w-full bg-gradient-to-br from-[#f8f9fa] to-[#eef2f5]">
         <div className="absolute inset-0 noise-overlay mix-blend-multiply opacity-[0.03] pointer-events-none" />
         
         {servicos.map((servico, idx) => (
            <ServiceBlock key={servico.id} data={servico} index={idx} />
         ))}
      </div>

      <CTA />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-48 pb-20">
       <div className="absolute top-1/2 left-[10%] w-16 h-16 bg-[#66CDD9]/20 rotate-45 blur-[4px] pointer-events-none" />
       <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
         <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
         >
           <span className="text-[#F28627] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-6 block">Nossa Expertise</span>
           <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-brand-dark text-balance mb-8">
             Soluções à medida <br />do mercado <span className="text-[#66CDD9]">Global.</span>
           </h1>
           <p className="font-sans text-xl text-brand-dark/50 font-light mx-auto max-w-2xl text-balance">
             Conheça as nossas áreas de atuação corporativa, desenhadas para criar autoridade sem ruído e solidificar posições de mercado.
           </p>
         </motion.div>
       </div>
    </section>
  )
}

function ServiceBlock({ data, index }: { data: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <section id={data.id} className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden border-b border-black/5 last:border-0">
           <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

               <div className={`lg:col-span-5 flex flex-col justify-center relative z-20 ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2 lg:col-start-8'}`}>
                  <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-150px" }}
                     transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                      <div className="flex items-center gap-4 mb-6">
                         <span className="text-[#66CDD9] font-display text-xl font-medium tracking-widest block">0{index + 1}</span>
                         <div className="w-12 h-[1px] bg-brand-dark/20" />
                         <span className="text-[#F28627] uppercase tracking-[0.2em] text-xs font-semibold block">{data.caption}</span>
                      </div>
                      <h2 className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-brand-dark font-medium leading-[1.1] mb-8 text-balance">
                         {data.title}
                      </h2>
                      <p className="font-sans text-lg md:text-xl text-brand-dark/60 leading-relaxed font-light">
                         {data.desc}
                      </p>
                  </motion.div>
               </div>

               <div className={`lg:col-span-7 relative z-10 w-full flex justify-center ${isEven ? 'order-1 lg:order-2 lg:justify-end' : 'order-1 lg:order-1 lg:justify-start'}`}>
                  <motion.div
                     initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                     whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                     viewport={{ once: true, margin: "-150px" }}
                     transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                     className={`absolute ${isEven ? 'bottom-[-10%] right-[-10%] bg-[#66CDD9]/20' : 'top-[-10%] left-[-10%] bg-[#F28627]/20'} w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] rounded-full blur-[80px] pointer-events-none`}
                  />

                  <motion.div
                     initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                     whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                     viewport={{ once: true, margin: "-150px" }}
                     transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                     className={`w-full max-w-2xl aspect-[4/5] object-cover rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] relative ${isEven ? 'lg:origin-right origin-center' : 'lg:origin-left origin-center'}`}
                  >
                     <img
                        src={data.img}
                        alt={data.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                     />
                     <div className={`absolute inset-0 bg-gradient-to-tr ${isEven ? 'from-[#F28627]/10' : 'from-[#66CDD9]/10'} via-transparent to-transparent mix-blend-overlay pointer-events-none`} />
                  </motion.div>
               </div>

            </div>
         </section>
    )
}
