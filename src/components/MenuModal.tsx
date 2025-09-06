import { motion, AnimatePresence } from 'framer-motion';
import type { MenuItem } from '@/data/menuData';
import { useCart } from '@/context/CartContext';

interface MenuModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

const MenuModal = ({ item, onClose }: MenuModalProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (item) {
      addToCart(item);
      onClose(); // Close modal after adding to cart
    }
  };

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            aria-hidden="true"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-50 m-auto w-full max-w-lg h-fit bg-surface rounded-xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-heading"
          >
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"
                aria-label="Close details view"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h2 id="modal-heading" className="text-3xl font-serif font-bold text-on-surface">{item.name}</h2>
              <p className="mt-4 text-on-background/80">{item.description}</p>
              <div className="flex justify-between items-center mt-6">
                <span className="text-2xl font-bold text-primary">Ksh {item.price}</span>
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-3 font-semibold text-white bg-primary rounded-md hover:bg-teal-700 transition-colors"
                >
                  Add to Order
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuModal;