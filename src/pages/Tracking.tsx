
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Package, Search, Truck, MapPin, Clock } from 'lucide-react';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setTrackingData({
        trackingNumber: trackingNumber,
        status: 'In Transit',
        estimatedDelivery: '2024-01-25',
        carrier: 'EMS',
        events: [
          {
            date: '2024-01-20 14:30',
            location: 'Warszawa, Polska',
            status: 'Paczka dotarła do centrum sortowniczego',
            icon: '📦'
          },
          {
            date: '2024-01-18 09:15',
            location: 'Frankfurt, Niemcy',
            status: 'Paczka w tranzycie',
            icon: '✈️'
          },
          {
            date: '2024-01-15 16:45',
            location: 'Guangzhou, Chiny',
            status: 'Paczka wysłana z magazynu',
            icon: '🚚'
          },
          {
            date: '2024-01-14 10:20',
            location: 'Guangzhou, Chiny',
            status: 'Paczka przekazana do przewoźnika',
            icon: '📋'
          }
        ]
      });
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
                Package Tracking
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Śledź swoje paczki z Chin w czasie rzeczywistym. 
                Obsługujemy wszystkich popularnych przewoźników.
              </p>
            </div>

            {/* Tracking Input */}
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-xl p-6 border border-white/10">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Wprowadź numer śledzenia (EMS, DHL, FedEx, itp.)..."
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
                    />
                  </div>
                  <Button 
                    onClick={handleTrack}
                    disabled={!trackingNumber || isLoading}
                    className="bg-white text-black hover:bg-gray-200 px-6"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Search className="w-4 h-4 mr-2" />
                    )}
                    Śledź
                  </Button>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Obsługujemy EMS, DHL, FedEx, UPS, China Post i inne
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tracking Results */}
        {trackingData && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Package Status */}
                <div className="glass-effect rounded-xl p-6 border border-white/10 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-white font-semibold text-xl mb-2">
                        {trackingData.trackingNumber}
                      </h2>
                      <p className="text-gray-400">Przewoźnik: {trackingData.carrier}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {trackingData.status}
                      </div>
                      <p className="text-gray-400 text-sm">
                        Est. delivery: {trackingData.estimatedDelivery}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Shipped</p>
                        <p className="text-gray-400 text-sm">2024-01-14</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Truck className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">In Transit</p>
                        <p className="text-gray-400 text-sm">Current</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 font-medium">Delivered</p>
                        <p className="text-gray-500 text-sm">Pending</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tracking Timeline */}
                <div className="glass-effect rounded-xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold text-lg mb-6">Historia śledzenia</h3>
                  
                  <div className="space-y-6">
                    {trackingData.events.map((event: any, index: number) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                            <span className="text-lg">{event.icon}</span>
                          </div>
                          {index < trackingData.events.length - 1 && (
                            <div className="w-0.5 h-12 bg-white/20 ml-5 mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-white font-medium">{event.status}</p>
                            <div className="flex items-center text-gray-400 text-sm">
                              <Clock className="w-4 h-4 mr-1" />
                              {event.date}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Popular Carriers */}
        <section className="py-12 bg-frosi-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Obsługiwani przewoźnicy</h2>
              <p className="text-gray-400">Śledzimy paczki od wszystkich popularnych firm kurierskich</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {['EMS', 'DHL', 'FedEx', 'UPS', 'China Post', 'SF Express'].map((carrier) => (
                <div key={carrier} className="glass-effect rounded-lg p-4 text-center border border-white/10">
                  <p className="text-white font-medium">{carrier}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Tracking;
