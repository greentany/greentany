import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import References from '@/components/References';
import Cta from '@/components/Cta';
import ValeurAjoutee from '@/components/ValeurAjoutee';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ValeurAjoutee />
      
      <References />
      <Cta 
        title="Prêt à commencer votre transformation ?"
        description="Découvrez comment nos experts peuvent vous accompagner vers l'excellence opérationnelle"
        primaryButtonText="Découvrir nos services"
        primaryButtonLink="/services"
        secondaryButtonText="Nous contacter"
        secondaryButtonLink="/contact"
      />
    </main>
  );
};

export default Home;