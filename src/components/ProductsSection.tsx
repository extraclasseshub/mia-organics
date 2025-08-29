import React, { useState } from 'react';
import ProductCard, { Product } from './ProductCard';
import ProductModal from './ProductModal';

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

export default function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products: Product[] = [
    {
      id: 'sea-moss-gel',
      name: 'Sea Moss Gel',
      price: 150,
      volume: '350ml jar',
      image: '/2.jpg',
      description: 'Premium sea moss gel packed with 92 essential minerals for optimal health and vitality.',
      details: 'Our Sea Moss Gel is made from wildcrafted sea moss, carefully processed to retain all natural nutrients. Rich in iodine, potassium, calcium, and vitamins A, C, E, and K. Perfect for smoothies, teas, or consumed directly. Store refrigerated for up to 3 weeks.',
      images: [
        
        '/2.jpg',
        '/3.jpg',
        '/4.jpg'
      ]
    },
    {
      id: 'raw-sea-moss',
      name: 'Raw Sea Moss',
      price: 150,
      weight: '79g',
      image: '/8.jpg',
      description: 'Pure, dried sea moss in its natural form. Perfect for making your own gel or adding to recipes.',
      details: 'Wildcrafted raw sea moss, sun-dried to preserve maximum nutritional value. This versatile superfood can be soaked and blended into gel form, or ground into powder. Contains natural sea minerals and is completely organic. Each batch is carefully inspected for quality.',
      images: [
        '/5.jpg',
        '/6.jpg',
        '/7.jpg',
        '/8.jpg'
      ]
    },
    {
      id: 'raw-sea-moss-family-pack',
      name: 'Raw Sea Moss - Family Pack',
      price: 580,
      weight: '1kg',
      image: '/sea-mos.jpg',
      description: 'Large family pack of pure, dried sea moss. Perfect for families or those who use sea moss regularly.',
      details: 'Wildcrafted raw sea moss in a convenient 1kg family pack, sun-dried to preserve maximum nutritional value. This versatile superfood can be soaked and blended into gel form, or ground into powder. Contains natural sea minerals and is completely organic. Each batch is carefully inspected for quality. Great value for regular sea moss users.',
      images: [
        '/sea-mos.jpg'
      ]
    }
  ];

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    if (isModalOpen) {
      handleCloseModal();
    }
  };

  return (
    <>
      <section id="products" className="py-20 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated selection of organic sea moss products, 
              each one crafted with love and attention to quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}