import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { isCartOpen, toggleCart, cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  // Define animation variants for different screen sizes
  const drawerVariants = {
    // Mobile (bottom sheet)
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
    // Desktop (side drawer)
    mdInitial: { x: '100%' },
    mdAnimate: { x: 0 },
    mdExit: { x: '100%' },
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 z-40"
            aria-hidden="true"
          />

          <motion.div
            // Apply mobile animations by default
            initial="initial"
            animate="animate"
            exit="exit"
            // Use Framer Motion's responsive variants for desktop
            variants={{
              initial: window.innerWidth < 768 ? drawerVariants.initial : drawerVariants.mdInitial,
              animate: window.innerWidth < 768 ? drawerVariants.animate : drawerVariants.mdAnimate,
              exit: window.innerWidth < 768 ? drawerVariants.exit : drawerVariants.mdExit,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            // Responsive classes for positioning and sizing
            className="fixed bottom-0 right-0 h-[90vh] w-full max-w-full bg-surface text-on-surface shadow-2xl z-50 flex flex-col rounded-t-2xl 
                       md:top-0 md:h-full md:w-full md:max-w-md md:rounded-t-none md:rounded-l-none"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-heading"
          >
            {/* Handle for bottom sheet on mobile */}
            <div className="w-12 h-1.5 bg-on-background/20 rounded-full mx-auto my-3 md:hidden" />

            <div className="flex items-center justify-between p-4 border-b border-on-background/10">
              <h2 id="cart-heading" className="text-xl font-serif font-bold">Your Order</h2>
              <button onClick={toggleCart} className="p-2 rounded-full hover:bg-on-surface/10" aria-label="Close cart">
                ✕
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow p-4 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-on-background/80">Your order is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {cartItems.map(item => (
                    <li key={item.id} className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                      <div className="flex-grow">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-primary">Ksh {item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 border rounded-md">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 border rounded-md">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700" aria-label={`Remove ${item.name}`}>
                        🗑️
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-on-background/10">
              <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total</span>
                <span>Ksh {cartTotal}</span>
              </div>
              <button className="w-full py-3 bg-primary text-white font-bold rounded-md hover:bg-teal-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;