import React from 'react';
import { X, Plus, Minus, MessageCircle, Trash2, ChevronDown } from 'lucide-react';
import { Product } from './ProductCard';
import { CustomerDetails } from './CheckoutForm';

export interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: (customerDetails: CustomerDetails) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const courierFee = items.length > 0 ? 80 : 0;
  const total = subtotal + courierFee;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[95vh] sm:max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <button
                onClick={onClose}
                className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{item.name}</h3>
                    <p className="text-sky-600 font-medium text-sm sm:text-base">R{item.price}</p>
                    {(item.weight || item.volume) && (
                      <p className="text-sm text-gray-500">{item.volume || item.weight}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    
                    <span className="w-6 sm:w-8 text-center font-medium text-sm sm:text-base">{item.quantity}</span>
                    
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-red-50 border border-red-200 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors ml-1 sm:ml-2"
                    >
                      <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Fixed bottom section for totals and order button */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 sm:p-6 bg-white rounded-b-2xl">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm sm:text-base">Subtotal:</span>
                <span className="font-medium text-sm sm:text-base">R{subtotal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm sm:text-base">Courier Fee:</span>
                <span className="font-medium text-sm sm:text-base">R{courierFee}</span>
              </div>
              <div className="border-t pt-2 flex justify-between items-center">
                <span className="text-lg sm:text-xl font-semibold text-gray-800">Total:</span>
                <span className="text-xl sm:text-2xl font-bold text-sky-600">R{total}</span>
              </div>
            </div>
            
            <button
              onClick={onCheckout}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </button>
            
            <p className="text-xs sm:text-sm text-gray-500 text-center mt-3">
              You'll be redirected to WhatsApp to complete your order
            </p>
          </div>
        )}
      </div>
    </div>
  );
}