import Hero from '@/components/sections/Hero';
import Atuacao from '@/components/sections/Atuacao';
import MetodoCarousel from '@/components/sections/MetodoCarousel';
import StickyReveal from '@/components/sections/StickyReveal';
import CircleStrategy from '@/components/sections/CircleStrategy';
import Trailer from '@/components/sections/Trailer';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="w-full">
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
