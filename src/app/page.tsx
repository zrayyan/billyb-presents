import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Bio from '@/components/Bio';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Bio />
      <Footer />
    </div>
  );
}
