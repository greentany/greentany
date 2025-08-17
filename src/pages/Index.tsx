import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import References from '@/components/References';
import AboutConsulting from '@/components/AboutConsulting';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

const Index = () => {
  const containerRef = useGSAPAnimations();
  return (
    <main ref={containerRef}>
      <section className="section-gsap">
        <Hero />
      </section>
      <section className="section-gsap">
        <About />
      </section>
      <section className="section-gsap">
        <AboutConsulting />
      </section>
    </main>
  );
};

export default Index;
