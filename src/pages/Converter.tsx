
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link2, Copy, Check, ExternalLink } from 'lucide-react';

const Converter = () => {
  const [url, setUrl] = useState('');
  const [convertedLinks, setConvertedLinks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const agents = [
    { name: 'Pandabuy', logo: '🐼', color: 'bg-orange-500' },
    { name: 'KakoBuy', logo: '🦘', color: 'bg-green-500' },
    { name: 'Wegobuy', logo: '🚀', color: 'bg-blue-500' },
    { name: 'CSSBuy', logo: '💎', color: 'bg-purple-500' }
  ];

  const handleConvert = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const results = agents.map((agent, index) => ({
        agent: agent.name,
        logo: agent.logo,
        color: agent.color,
        convertedUrl: `https://${agent.name.toLowerCase()}.com/product/converted-link-${index}`,
        originalPrice: '¥128',
        agentFee: '¥5',
        totalPrice: '¥133'
      }));
      setConvertedLinks(results);
      setIsLoading(false);
    }, 2000);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-frosi-black">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-frosi-black to-frosi-dark py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Link Converter
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Konwertuj linki z Taobao, Weidian i 1688 dla wszystkich popularnych agentów. 
                Porównaj ceny i wybierz najlepszą opcję.
              </p>
            </div>

            {/* URL Input */}
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-xl p-6 border border-white/10">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Wklej link do produktu (Taobao, Weidian, 1688)..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
                    />
                  </div>
                  <Button 
                    onClick={handleConvert}
                    disabled={!url || isLoading}
                    className="bg-white text-black hover:bg-gray-200 px-6"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Link2 className="w-4 h-4 mr-2" />
                    )}
                    Konwertuj
                  </Button>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Obsługujemy wszystkie popularne platformy chińskie
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        {convertedLinks.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-6">Skonwertowane linki</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {convertedLinks.map((link, index) => (
                    <div key={index} className="glass-effect rounded-xl p-6 border border-white/10">
                      {/* Agent Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${link.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                            {link.logo}
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{link.agent}</h3>
                            <p className="text-gray-400 text-sm">Oficjalny partner</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-semibold">{link.totalPrice}</p>
                          <p className="text-gray-400 text-xs">+ {link.agentFee} fee</p>
                        </div>
                      </div>

                      {/* Converted URL */}
                      <div className="bg-white/5 rounded-lg p-3 mb-4">
                        <p className="text-gray-400 text-xs mb-1">Skonwertowany link:</p>
                        <p className="text-white text-sm font-mono break-all">{link.convertedUrl}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button
                          onClick={() => copyToClipboard(link.convertedUrl, index)}
                          variant="outline"
                          className="flex-1 border-white/30 text-white hover:bg-white/10"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-4 h-4 mr-2" />
                          ) : (
                            <Copy className="w-4 h-4 mr-2" />
                          )}
                          {copiedIndex === index ? 'Skopiowane!' : 'Kopiuj'}
                        </Button>
                        <Button
                          onClick={() => window.open(link.convertedUrl, '_blank')}
                          className="bg-white text-black hover:bg-gray-200"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Otwórz
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Product Info */}
                <div className="mt-8 glass-effect rounded-xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Informacje o produkcie</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Wykryta platforma</p>
                      <p className="text-white font-medium">Taobao</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Oryginalna cena</p>
                      <p className="text-white font-medium">¥128</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Status produktu</p>
                      <p className="text-green-400 font-medium">Dostępny</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* How it works */}
        <section className="py-12 bg-frosi-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Jak to działa?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Nasz konwerter automatycznie przekształca linki dla wszystkich popularnych agentów
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-white font-semibold mb-2">1. Wklej link</h3>
                <p className="text-gray-400 text-sm">Skopiuj link z Taobao, Weidian lub 1688</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-white font-semibold mb-2">2. Automatyczna konwersja</h3>
                <p className="text-gray-400 text-sm">Generujemy linki dla wszystkich agentów</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-white font-semibold mb-2">3. Wybierz agenta</h3>
                <p className="text-gray-400 text-sm">Porównaj ceny i kup przez ulubionego agenta</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Converter;
