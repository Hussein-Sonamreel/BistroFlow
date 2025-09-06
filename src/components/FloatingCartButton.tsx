import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

const FloatingCartButton = () => {
  const { toggleCart, itemCount, cartTotal } = useCart();

  // We only want to show this on mobile, and when the cart has items.
  // The `md:hidden` class ensures it disappears on medium screens and larger.
  return (
    <AnimatePresence>
      {itemCount > 0 && (
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          exit={{ y: 200 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 z-30 md:hidden" // Key responsive class
        >
          <button
            onClick={toggleCart}
            className="w-full flex items-center justify-between px-6 py-4 bg-primary text-white font-bold rounded-lg shadow-2xl"
          >
            <span>View Order ({itemCount})</span>
            <span>Ksh {cartTotal}</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCartButton;