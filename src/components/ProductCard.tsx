
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  category: string;
  image: string;
  rating: number;
  qcCount: number;
  isPopular?: boolean;
}

const ProductCard = ({ title, price, category, image, rating, qcCount, isPopular }: ProductCardProps) => {
  return (
    <div className="group relative glass-effect rounded-xl overflow-hidden card-hover border border-white/10">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {isPopular && (
          <Badge className="absolute top-3 left-3 bg-white text-black font-semibold">
            Popularne
          </Badge>
        )}
        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="w-3 h-3 text-white fill-current" />
          <span className="text-white text-xs font-medium">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <Badge variant="secondary" className="text-xs mb-2 bg-white/10 text-white border-none">
            {category}
          </Badge>
          <h3 className="font-semibold text-white text-sm leading-tight line-clamp-2">
            {title}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-lg">{price}</span>
          <div className="flex items-center space-x-1 text-gray-400 text-xs">
            <Eye className="w-3 h-3" />
            <span>{qcCount} QC</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 border-white/30 text-white hover:bg-white/10"
          >
            <Eye className="w-3 h-3 mr-1" />
            QC
          </Button>
          <Button 
            size="sm" 
            className="flex-1 bg-white text-black hover:bg-gray-200"
          >
            <ShoppingCart className="w-3 h-3 mr-1" />
            Kup
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
