
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Search, Filter, Grid, List } from 'lucide-react';

const W2C = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    'Wszystkie',
    'Sneakers',
    'Streetwear',
    'Outerwear',
    'Accessories',
    'Luxury'
  ];

  const agents = [
    { name: 'Pandabuy', logo: '🐼' },
    { name: 'KakoBuy', logo: '🦘' },
    { name: 'Wegobuy', logo: '🚀' },
    { name: 'CSSBuy', logo: '💎' }
  ];

  const products = [
    {
      title: "Nike Dunk Low Panda",
      price: "¥89",
      category: "Sneakers",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      rating: 4.8,
      qcCount: 234,
      isPopular: true,
    },
    // Add more products here...
  ];

  return (
    <div className="min-h-screen bg-frosi-black">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-frosi-black to-frosi-dark py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                W2C Product Finder
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Znajdź najlepsze produkty replica z zaufanych źródeł. 
                Ponad 50,000 sprawdzonych produktów w naszej bazie.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-xl p-6 border border-white/10">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Szukaj produktów... (np. Nike Dunk, Stone Island)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
                    />
                  </div>
                  <Button className="bg-white text-black hover:bg-gray-200 px-6">
                    <Search className="w-4 h-4 mr-2" />
                    Szukaj
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <div className="lg:w-1/4">
                <div className="glass-effect rounded-xl p-6 border border-white/10 sticky top-24">
                  <h3 className="text-white font-semibold mb-4 flex items-center">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtry
                  </h3>
                  
                  {/* Categories */}
                  <div className="mb-6">
                    <h4 className="text-white text-sm font-medium mb-3">Kategorie</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === category
                              ? 'bg-white text-black'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Agent Selection */}
                  <div className="mb-6">
                    <h4 className="text-white text-sm font-medium mb-3">Agenci</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {agents.map((agent) => (
                        <button
                          key={agent.name}
                          className="flex items-center justify-center p-3 glass-effect rounded-lg border border-white/10 hover:border-white/30 transition-colors"
                        >
                          <span className="text-lg mr-2">{agent.logo}</span>
                          <span className="text-white text-xs">{agent.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="lg:w-3/4">
                {/* View Controls */}
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-400">
                    Znaleziono <span className="text-white font-semibold">1,234</span> produktów
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className={viewMode === 'grid' ? 'bg-white text-black' : 'border-white/30 text-white'}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className={viewMode === 'list' ? 'bg-white text-black' : 'border-white/30 text-white'}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Załaduj więcej produktów
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default W2C;
