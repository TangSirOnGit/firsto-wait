import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Values from '../components/Values';
import Waitlist from '../components/Waitlist';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      {/* <Values /> */}
      <HowItWorks />
      {/* <Testimonials /> */}
      <Pricing />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}
