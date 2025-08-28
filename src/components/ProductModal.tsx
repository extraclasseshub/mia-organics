import React from 'react';
import { X, ShoppingCart, Star } from 'lucide-react';
import { Product } from './ProductCard';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = React.useState(0);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-600 p-2 rounded-full hover:bg-white z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <div className="mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-sky-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
              
             
              
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-bold text-sky-600">R{product.price}</span>
                  {(product.weight || product.volume) && (
                    <span className="text-lg text-gray-500">
                      {product.volume || product.weight}
                    </span>
                  )}
                </div>
                <p className="text-green-600 font-medium">✓ In Stock - Fast Delivery</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Details</h3>
                <p className="text-gray-600 leading-relaxed">{product.details}</p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-sky-600 hover:to-cyan-700 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart - R{product.price}
                </button>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}