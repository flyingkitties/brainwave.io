import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pricing from '@/components/pricing/Pricing';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="px-5 md:px-[10%] xl:px-[15%]">
      <Header />
      <Hero />
      <Pricing />
    </main>
  );
}
