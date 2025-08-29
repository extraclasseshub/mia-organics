import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Shield, Clock, MessageCircle } from 'lucide-react';
import Footer from '../components/Footer';
import InfoModal from '../components/InfoModal';

export default function ReturnPolicy() {
  const [infoModal, setInfoModal] = React.useState({ isOpen: false, type: '' });

  const handleInfoClick = (type: string) => {
    setInfoModal({ isOpen: true, type });
  };

  const handleInfoClose = () => {
    setInfoModal({ isOpen: false, type: '' });
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800">Return Policy</span>
          </div>

          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <RotateCcw className="w-10 h-10 text-sky-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Return Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your satisfaction is our priority. We offer a comprehensive return policy to ensure you're completely happy with your purchase.
            </p>
          </div>

          {/* Policy Content */}
          <div className="space-y-8">
            {/* 30-Day Guarantee */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">30-Day Money-Back Guarantee</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We stand behind the quality of our organic sea moss products. If you're not completely satisfied 
                with your purchase, you can return any unused product within 30 days of delivery for a full refund. 
                No questions asked.
              </p>
            </div>

            {/* Return Process */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Return Your Order</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Contact Us</h3>
                    <p className="text-gray-600">
                      Reach out to us via WhatsApp at +27 73 479 8500 or email info@miasorganics.co.za 
                      within 30 days of receiving your order. Include your order details and reason for return.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Prepare Your Return</h3>
                    <p className="text-gray-600">
                      Package the product in its original packaging (if available) or secure packaging. 
                      Include any accessories or documentation that came with the product.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Ship Your Return</h3>
                    <p className="text-gray-600">
                      We'll provide you with return instructions and our return address. 
                      Return shipping costs are the responsibility of the customer unless the product was damaged or defective.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Receive Your Refund</h3>
                    <p className="text-gray-600">
                      Once we receive and inspect your return, we'll process your refund within 5-7 business days. 
                      Refunds will be issued to your original payment method.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Return Conditions */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Return Conditions</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Time Limit</h3>
                    <p className="text-gray-600">Returns must be initiated within 30 days of delivery date.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Product Condition</h3>
                    <p className="text-gray-600">Products must be unused and in original condition. Opened gel products are acceptable for return if more than 80% remains.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <RotateCcw className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Packaging</h3>
                    <p className="text-gray-600">Original packaging preferred but not required. Ensure products are securely packaged to prevent damage during return shipping.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Damaged or Defective Products */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Damaged or Defective Products</h2>
              <p className="text-gray-700 mb-4">
                If your product arrives damaged or defective, we'll make it right immediately:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Contact us within 48 hours of delivery</li>
                <li>• We'll arrange a replacement or full refund at no cost to you</li>
                <li>• Return shipping costs covered by Mia's Organics</li>
                <li>• Priority processing for damaged product claims</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help with a Return?</h2>
              <p className="text-gray-700 mb-6">
                Our customer service team is here to help make your return process as smooth as possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.open('https://wa.me/27734798500?text=Hi! I need help with a return for my sea moss order.', '_blank')}
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Support
                </button>
                
                <button
                  onClick={() => window.open('mailto:info@miasorganics.co.za?subject=Return Request', '_self')}
                  className="flex items-center justify-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors"
                >
                  Email Us
                </button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Information</h2>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">Refund Processing</h3>
                  <p>Refunds are processed to the original payment method. Bank transfers may take 3-5 business days to reflect in your account.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Exchange Policy</h3>
                  <p>We currently don't offer direct exchanges. Please return your original item and place a new order for the desired product.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Bulk Orders</h3>
                  <p>Special return conditions may apply to bulk orders over R1000. Contact us for details.</p>
                </div>
              </div>
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