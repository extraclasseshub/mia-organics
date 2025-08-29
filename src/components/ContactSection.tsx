import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/27734798500?text=Hi! I would like to learn more about your organic sea moss products.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+27734798500', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:info@miasorganics.co.za?subject=Inquiry about Sea Moss Products', '_self');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Have questions about our products? We're here to help you on your wellness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-sky-100 mb-4">Chat with us directly</p>
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Start Chat
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-sky-100 mb-4">+27 73 479 8500</p>
            <button
              onClick={handleCall}
              className="bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors"
            >
              Call Now
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-sky-100 mb-4">info@miasorganics.co.za</p>
            <button
              onClick={handleEmail}
              className="bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors"
            >
              Send Email
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all lg:col-span-3">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
            <div className="text-sky-100 space-y-1">
              <p>Monday - Friday: 8AM - 6PM</p>
              <p>Saturday: 9AM - 4PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center gap-2 text-white mb-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Our Location</span>
            </div>
            <div className="text-sky-100 space-y-1">
              <p className="font-medium">20/5915 Danie Theron Street</p>
              <p>Heuwel Manor</p>
              <p>Emalahleni, 1034</p>
              <p className="text-sm mt-3 border-t border-white/20 pt-3">
                Serving nationwide with fast delivery
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 inline-block">
            <p className="text-sky-100">
              <Truck className="w-4 h-4 inline mr-2" />
              Fast delivery across South Africa with our premium courier service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}