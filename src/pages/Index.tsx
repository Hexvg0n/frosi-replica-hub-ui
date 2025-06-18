
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BestSellers from '@/components/BestSellers';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-frosi-dark">
      <Navigation />
      <HeroSection />
      <BestSellers />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
