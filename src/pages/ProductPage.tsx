import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Truck, Shield, Heart } from 'lucide-react';
import { Product } from '../components/ProductCard';
import Footer from '../components/Footer';
import InfoModal from '../components/InfoModal';

interface ProductPageProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 'sea-moss-gel',
    name: 'Sea Moss Gel',
    price: 150,
    volume: '350ml jar',
    image: '/2.jpg',
    description: 'Premium sea moss gel packed with 92 essential minerals for optimal health and vitality.',
    details: 'Our Sea Moss Gel is made from wildcrafted sea moss, carefully processed to retain all natural nutrients. Rich in iodine, potassium, calcium, and vitamins A, C, E, and K. Perfect for smoothies, teas, or consumed directly. Store refrigerated for up to 3 weeks.',
    images: ['/2.jpg', '/3.jpg', '/4.jpg']
  },
  {
    id: 'raw-sea-moss',
    name: 'Raw Sea Moss',
    price: 150,
    weight: '79g',
    image: '/8.jpg',
    description: 'Pure, dried sea moss in its natural form. Perfect for making your own gel or adding to recipes.',
    details: 'Wildcrafted raw sea moss, sun-dried to preserve maximum nutritional value. This versatile superfood can be soaked and blended into gel form, or ground into powder. Contains natural sea minerals and is completely organic. Each batch is carefully inspected for quality.',
    images: ['/5.jpg', '/6.jpg', '/7.jpg', '/8.jpg']
  },
  {
    id: 'raw-sea-moss-family-pack',
    name: 'Raw Sea Moss - Family Pack',
    price: 580,
    weight: '1kg',
    image: '/sea-mos.jpg',
    description: 'Large family pack of pure, dried sea moss. Perfect for families or those who use sea moss regularly.',
    details: 'Wildcrafted raw sea moss in a convenient 1kg family pack, sun-dried to preserve maximum nutritional value. This versatile superfood can be soaked and blended into gel form, or ground into powder. Contains natural sea minerals and is completely organic. Each batch is carefully inspected for quality. Great value for regular sea moss users.',
    images: ['/sea-mos.jpg']
  }
];

export default function ProductPage({ onAddToCart }: ProductPageProps) {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [infoModal, setInfoModal] = useState({ isOpen: false, type: '' });
  
  const product = products.find(p => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInfoClick = (type: string) => {
    setInfoModal({ isOpen: true, type });
  };

  const handleInfoClose = () => {
    setInfoModal({ isOpen: false, type: '' });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#products" className="hover:text-sky-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>

          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="mb-6">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="flex gap-3 overflow-x-auto">
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

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-sky-600">R{product.price}</span>
                {(product.weight || product.volume) && (
                  <span className="text-xl text-gray-500">
                    {product.volume || product.weight}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">(4.9/5 from 127 reviews)</span>
              </div>

              <p className="text-green-600 font-medium mb-8 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                ✓ In Stock - Fast Delivery Available
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                <p className="text-gray-600 leading-relaxed">{product.details}</p>
              </div>

              {/* Key Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg">
                    <Heart className="w-5 h-5 text-sky-600" />
                    <span className="text-gray-700">92 Essential Minerals</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg">
                    <Heart className="w-5 h-5 text-sky-600" />
                    <span className="text-gray-700">Immune Support</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg">
                    <Heart className="w-5 h-5 text-sky-600" />
                    <span className="text-gray-700">Thyroid Health</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg">
                    <Heart className="w-5 h-5 text-sky-600" />
                    <span className="text-gray-700">Digestive Wellness</span>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Truck className="w-5 h-5 text-sky-600" />
                  <span className="font-semibold text-gray-800">Fast Nationwide Delivery</span>
                </div>
                <p className="text-gray-600 text-sm">R80 courier fee • 2-3 business days • Temperature controlled</p>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => onAddToCart(product)}
                className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-sky-600 hover:to-cyan-700 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl text-lg"
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart - R{product.price}
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                30-day money-back guarantee • Secure checkout via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer onInfoClick={handleInfoClick} />
      
      <InfoModal
        isOpen={infoModal.isOpen}
        onClose={handleInfoClose}
        type={infoModal.type}
      />
    </>
  );
}