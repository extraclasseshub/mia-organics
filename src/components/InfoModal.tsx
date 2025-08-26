import React from 'react';
import { X, Truck, RotateCcw, HelpCircle, Heart } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
}

const infoContent = {
  shipping: {
    icon: <Truck className="w-8 h-8" />,
    title: "Shipping Information",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Delivery Options</h4>
          <ul className="space-y-2 text-gray-600">
            <li>• Express Courier: R80 (2-3 business days)</li>
            <li>• Nationwide delivery available</li>
            <li>• Temperature-controlled packaging</li>
            <li>• SMS tracking notifications</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Processing Time</h4>
          <p className="text-gray-600">Orders are processed within 1-2 business days. You'll receive a tracking number once your order ships.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Delivery Areas</h4>
          <p className="text-gray-600">We deliver nationwide across South Africa. Remote areas may require additional 1-2 days.</p>
        </div>
      </div>
    )
  },
  returns: {
    icon: <RotateCcw className="w-8 h-8" />,
    title: "Returns Policy",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">30-Day Money-Back Guarantee</h4>
          <p className="text-gray-600">We stand behind our products. If you're not completely satisfied, return your unused product within 30 days for a full refund.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Return Process</h4>
          <ul className="space-y-2 text-gray-600">
            <li>• Contact us via WhatsApp to initiate return</li>
            <li>• Product must be in original packaging</li>
            <li>• Return shipping costs covered by customer</li>
            <li>• Refund processed within 5-7 business days</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Damaged Products</h4>
          <p className="text-gray-600">If your product arrives damaged, contact us immediately. We'll arrange a replacement at no cost to you.</p>
        </div>
      </div>
    )
  },
  faq: {
    icon: <HelpCircle className="w-8 h-8" />,
    title: "Frequently Asked Questions",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">How do I consume sea moss gel?</h4>
          <p className="text-gray-600">Take 1-2 tablespoons daily. Mix into smoothies, teas, or consume directly. Start with smaller amounts and gradually increase.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">How long does sea moss gel last?</h4>
          <p className="text-gray-600">When refrigerated, our sea moss gel stays fresh for up to 3 weeks. Always use clean utensils when serving.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Is your sea moss organic?</h4>
          <p className="text-gray-600">Yes! Our sea moss is wildcrafted from pristine ocean waters and processed without any chemicals or additives.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Can I make gel from raw sea moss?</h4>
          <p className="text-gray-600">Absolutely! Soak the raw sea moss for 12-24 hours, then blend with water. Instructions included with every order.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Are there any side effects?</h4>
          <p className="text-gray-600">Sea moss is generally safe for most people. Start with small amounts. Consult your healthcare provider if you have thyroid conditions.</p>
        </div>
      </div>
    )
  },
  health: {
    icon: <Heart className="w-8 h-8" />,
    title: "Health Benefits",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Rich in Essential Minerals</h4>
          <p className="text-gray-600">Contains 92 of the 102 minerals your body needs, including iodine, potassium, calcium, and magnesium.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Supports Thyroid Function</h4>
          <p className="text-gray-600">High iodine content supports healthy thyroid function and metabolism regulation.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Boosts Immune System</h4>
          <p className="text-gray-600">Rich in vitamins A, C, and E, plus antioxidants that support immune system health.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Promotes Digestive Health</h4>
          <p className="text-gray-600">Natural prebiotic properties support healthy gut bacteria and digestive function.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Skin & Hair Health</h4>
          <p className="text-gray-600">Collagen-supporting nutrients promote healthy skin elasticity and hair growth.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Energy & Recovery</h4>
          <p className="text-gray-600">Natural minerals and vitamins support energy production and post-workout recovery.</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> These statements have not been evaluated by health authorities. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before use.
          </p>
        </div>
      </div>
    )
  }
};

export default function InfoModal({ isOpen, onClose, type }: InfoModalProps) {
  if (!isOpen || !infoContent[type]) return null;

  const info = infoContent[type];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
              {info.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{info.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {info.content}
        </div>
      </div>
    </div>
  );
}