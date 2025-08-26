import React from 'react';
import { Leaf, Heart, Award, Users } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Organic",
      description: "Sustainably harvested from pristine ocean waters"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Benefits",
      description: "Rich in minerals and nutrients for optimal wellness"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Carefully processed to preserve natural goodness"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focused",
      description: "Supporting local communities and sustainable practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Mia's Organics?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the highest quality organic sea moss products, 
            carefully sourced and processed to deliver maximum nutritional benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}