
import { Badge } from '@/components/ui/badge';
import { Users, Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-frosi-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-white text-black mb-4">
                O Platformie
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Poznaj 
                <span className="gradient-text"> Frosi aka Rudy</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                FrosiReps to pionierska platforma w Polsce, stworzona przez pasjonata mody replica. 
                Nasza misja to dostarczenie społeczności najlepszych narzędzi do znajdowania, 
                sprawdzania i kupowania produktów replica w najwyższej jakości.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Współpracujemy oficjalnie z agentami takimi jak KakoBuy i budujemy największą 
                społeczność replica fashion w Polsce na Discordzie i TikToku.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass-effect p-6 rounded-xl text-center border border-white/10">
                <Users className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Społeczność</h3>
                <p className="text-gray-400 text-sm">15,000+ aktywnych członków</p>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center border border-white/10">
                <Award className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Jakość</h3>
                <p className="text-gray-400 text-sm">Sprawdzone produkty i sprzedawcy</p>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center border border-white/10">
                <TrendingUp className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Innowacje</h3>
                <p className="text-gray-400 text-sm">Najnowsze narzędzia i funkcje</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="glass-effect p-8 rounded-2xl border border-white/10">
              <div className="aspect-square bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center mb-6">
                <span className="text-6xl font-bold text-black">F</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 glass-effect rounded-lg border border-white/10">
                  <span className="text-gray-300">Produkty W2C</span>
                  <span className="text-white font-bold">50,000+</span>
                </div>
                <div className="flex justify-between items-center p-4 glass-effect rounded-lg border border-white/10">
                  <span className="text-gray-300">QC Zdjęcia</span>
                  <span className="text-white font-bold">25,000+</span>
                </div>
                <div className="flex justify-between items-center p-4 glass-effect rounded-lg border border-white/10">
                  <span className="text-gray-300">Konwersje Linków</span>
                  <span className="text-white font-bold">100,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
