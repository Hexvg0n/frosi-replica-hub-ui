
import ProductCard from './ProductCard';

const BestSellers = () => {
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
    {
      title: "Stone Island Jacket",
      price: "¥168",
      category: "Outerwear",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400&h=400&fit=crop",
      rating: 4.6,
      qcCount: 156,
    },
    {
      title: "Travis Scott AJ1 Low",
      price: "¥129",
      category: "Sneakers",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      rating: 4.9,
      qcCount: 312,
      isPopular: true,
    },
    {
      title: "Chrome Hearts Hoodie",
      price: "¥89",
      category: "Streetwear",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      rating: 4.7,
      qcCount: 198,
    },
    {
      title: "Off-White Belt",
      price: "¥45",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.5,
      qcCount: 89,
    },
    {
      title: "Balenciaga Triple S",
      price: "¥158",
      category: "Sneakers",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
      rating: 4.4,
      qcCount: 167,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-frosi-black to-frosi-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Najlepiej Sprzedające Się
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Odkryj najpopularniejsze produkty w naszej społeczności. 
            Sprawdzone przez tysiące użytkowników.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 glow-effect">
            Zobacz Wszystkie Produkty
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
