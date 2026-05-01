import Hero from '@/components/sections/Hero';
import Atuacao from '@/components/sections/Atuacao';
import MetodoCarousel from '@/components/sections/MetodoCarousel';
import StickyReveal from '@/components/sections/StickyReveal';
import CircleStrategy from '@/components/sections/CircleStrategy';
import Trailer from '@/components/sections/Trailer';
import CTA from '@/components/sections/CTA';

import SEO from '@/components/SEO';

export default function Home() {
  return (
    <div className="w-full">
      <SEO 
        title="Arquitetura da sua reputação digital" 
        description="Assessoria estratégica para operações B2B globais. Transformamos reputação sólida em alcance influente e direcionado."
      />
      <Hero />
      <Atuacao />
      <MetodoCarousel />
      <CircleStrategy />
      <StickyReveal />
      <Trailer />
      <CTA />
    </div>
  );
}
