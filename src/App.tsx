import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Cart, { CartItem } from './components/Cart';
import InfoModal from './components/InfoModal';
import CheckoutForm, { CustomerDetails } from './components/CheckoutForm';
import { Product } from './components/ProductCard';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import ProductPage from './pages/ProductPage';
import ReturnPolicy from './pages/ReturnPolicy';
import HomePage from './pages/HomePage';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [infoModal, setInfoModal] = useState({ isOpen: false, type: '' });

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    // Show a brief success notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all transform translate-x-full';
    notification.textContent = `${product.name} added to cart!`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 100);
    
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 2000);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeItem(id);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleCheckout = (customerDetails: CustomerDetails) => {
    if (cartItems.length === 0) {
      return;
    }

    // Create detailed order message
    const orderDetails = cartItems.map(item => {
      const itemTotal = item.price * item.quantity;
      const sizeInfo = item.volume || item.weight || '';
      return `${item.name}${sizeInfo ? ` (${sizeInfo})` : ''} x${item.quantity} - R${itemTotal}`;
    }).join('\n');
    
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const courierFee = 80;
    const total = subtotal + courierFee;
    
    const message = `🛒 NEW ORDER REQUEST

📋 ORDER DETAILS:
${orderDetails}

💰 PRICING:
Subtotal: R${subtotal}
Courier Fee: R${courierFee}
TOTAL: R${total}

👤 CUSTOMER DETAILS:
Name: ${customerDetails.fullName}
Phone: ${customerDetails.phone}
Email: ${customerDetails.email}

📍 DELIVERY ADDRESS:
${customerDetails.address}
${customerDetails.city}, ${customerDetails.province}
Postal Code: ${customerDetails.postalCode}

${customerDetails.specialInstructions ? `📝 SPECIAL INSTRUCTIONS:\n${customerDetails.specialInstructions}\n\n` : ''}Please confirm this order and let me know the payment details. Thank you!`;
    
    const whatsappUrl = `https://wa.me/27734798500?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and close modals
    setCartItems([]);
    setIsCartOpen(false);
    setIsCheckoutOpen(false);
  };

  const handleCartCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleInfoClick = (type: string) => {
    setInfoModal({ isOpen: true, type });
  };

  const handleInfoClose = () => {
    setInfoModal({ isOpen: false, type: '' });
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Header cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />
      
      <Routes>
        <Route path="/" element={
          <HomePage 
            onAddToCart={addToCart} 
            onInfoClick={handleInfoClick}
          />
        } />
        <Route path="/product/:productId" element={
          <ProductPage onAddToCart={addToCart} />
        } />
        <Route path="/return-policy" element={<ReturnPolicy />} />
      </Routes>
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCartCheckout}
      />
      
      <CheckoutForm
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onSubmitOrder={handleCheckout}
      />
      
      <InfoModal
        isOpen={infoModal.isOpen}
        onClose={handleInfoClose}
        type={infoModal.type}
      />
      
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;