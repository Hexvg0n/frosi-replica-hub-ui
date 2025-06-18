
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Image, Calendar, Star } from 'lucide-react';

const QC = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sampleQCs = [
    {
      id: 1,
      product: "Nike Dunk Low Panda",
      images: [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop"
      ],
      rating: 4.8,
      date: "2024-01-15",
      batch: "PK Batch"
    },
    {
      id: 2,
      product: "Travis Scott AJ1 Low",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&h=400&fit=crop"
      ],
      rating: 4.9,
      date: "2024-01-12",
      batch: "LJR Batch"
    }
  ];

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
                QC Finder
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Sprawdź jakość produktów dzięki zdjęciom QC od społeczności. 
                Wklej link do produktu i zobacz jak wygląda w rzeczywistości.
              </p>
            </div>

            {/* URL Input */}
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-xl p-6 border border-white/10">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Wklej link do produktu (Taobao, Weidian, 1688)..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
                    />
                  </div>
                  <Button 
                    onClick={handleSearch}
                    disabled={!url || isLoading}
                    className="bg-white text-black hover:bg-gray-200 px-6"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Image className="w-4 h-4 mr-2" />
                    )}
                    Znajdź QC
                  </Button>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Obsługujemy linki z Taobao, Weidian, 1688 i innych popularnych platform
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QC Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Ostatnie QC</h2>
              <p className="text-gray-400">Najnowsze zdjęcia jakości od społeczności</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sampleQCs.map((qc) => (
                <div key={qc.id} className="glass-effect rounded-xl overflow-hidden border border-white/10">
                  {/* Product Info */}
                  <div className="p-6 border-b border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{qc.product}</h3>
                        <p className="text-gray-400 text-sm">{qc.batch}</p>
                      </div>
                      <div className="flex items-center space-x-1 bg-white/10 rounded-full px-3 py-1">
                        <Star className="w-4 h-4 text-white fill-current" />
                        <span className="text-white text-sm font-medium">{qc.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {qc.date}
                    </div>
                  </div>

                  {/* Images */}
                  <div className="grid grid-cols-2 gap-4 p-6">
                    {qc.images.map((image, index) => (
                      <div key={index} className="aspect-square overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`QC ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0">
                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                      Zobacz wszystkie zdjęcia
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Załaduj więcej QC
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default QC;
