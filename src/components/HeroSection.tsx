
import { Button } from '@/components/ui/button';
import { Search, Star, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-frosi-dark via-frosi-navy to-frosi-dark"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,43,226,0.1),transparent_70%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-frosi rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-frosi-accent rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-frosi-blue rounded-full opacity-25 animate-pulse delay-500"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Jedyna Platforma</span>
            <br />
            <span className="text-white">W2C, Której</span>
            <br />
            <span className="gradient-text">Potrzebowałeś</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Kompleksowe narzędzia dla społeczności replica fashion w Polsce. 
            W2C finder, QC checker, konwerter linków i tracker paczek w jednym miejscu.
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8">
            <div className="flex items-center space-x-2 glass-effect px-6 py-3 rounded-full">
              <Users className="w-5 h-5 text-frosi-purple" />
              <span className="text-white font-semibold">15,000+</span>
              <span className="text-gray-300">członków Discord</span>
            </div>
            <div className="flex items-center space-x-2 glass-effect px-6 py-3 rounded-full">
              <Star className="w-5 h-5 text-frosi-accent" />
              <span className="text-white font-semibold">2M+</span>
              <span className="text-gray-300">polubień TikTok</span>
            </div>
            <div className="flex items-center space-x-2 glass-effect px-6 py-3 rounded-full">
              <Search className="w-5 h-5 text-frosi-blue" />
              <span className="text-white font-semibold">50,000+</span>
              <span className="text-gray-300">produktów W2C</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-frosi hover:bg-gradient-frosi-hover text-white px-8 py-6 text-lg animate-glow"
            >
              <Search className="w-5 h-5 mr-2" />
              Znajdź Produkty W2C
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Dołącz do Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
