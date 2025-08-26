import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-br from-sky-400 via-sky-500 to-cyan-600 flex items-center relative"
      style={{
        backgroundImage: 'url("/1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/80 via-sky-500/80 to-cyan-600/80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Pure Organic
              <span className="block text-cyan-100">Sea Moss</span>
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-lg">
              Discover the natural power of premium sea moss products. Sustainably sourced, 
              carefully processed, and delivered fresh to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProducts}
                className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-black/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
              <iframe
                src="https://drive.google.com/file/d/1NUzYs2bF4U1G8lKnbQZlF_Vc9ff5mRuH/preview"
                title="Mia's Organics - Sea Moss Benefits"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-sky-600/20 to-transparent rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}