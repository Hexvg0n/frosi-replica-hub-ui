
import { Search, Eye, Link, Package } from 'lucide-react';

const Footer = () => {
  const tools = [
    { name: 'W2C Finder', icon: Search, description: 'Znajdź produkty replica' },
    { name: 'QC Checker', icon: Eye, description: 'Sprawdź jakość produktów' },
    { name: 'Link Converter', icon: Link, description: 'Konwertuj linki dla agentów' },
    { name: 'Package Tracker', icon: Package, description: 'Śledź swoje paczki' },
  ];

  return (
    <footer className="bg-frosi-dark border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold text-white">FrosiReps</span>
            </div>
            <p className="text-gray-400">
              Najlepsza platforma W2C i narzędzia dla społeczności replica fashion w Polsce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Discord
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                TikTok
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Narzędzia</h3>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <tool.icon className="w-4 h-4 group-hover:text-white transition-colors" />
                  <div>
                    <div className="font-medium">{tool.name}</div>
                    <div className="text-xs text-gray-500">{tool.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Bądź na bieżąco</h3>
            <p className="text-gray-400 text-sm">
              Otrzymuj powiadomienia o nowych produktach i funkcjach.
            </p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Twój email..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
              />
              <button className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-lg transition-all">
                Zapisz się
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 FrosiReps. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
