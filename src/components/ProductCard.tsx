import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  details: string;
  images: string[];
  weight?: string;
  volume?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-sky-600 transition-colors">{product.name}</h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-sky-600">R{product.price}</span>
            {(product.weight || product.volume) && (
              <span className="text-sm text-gray-500 ml-2">
                {product.volume || product.weight}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            View Details
          </Link>
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-gradient-to-r from-sky-500 to-cyan-600 text-white px-4 py-2 rounded-lg font-medium hover:from-sky-600 hover:to-cyan-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}