import { motion } from 'framer-motion';
import type { MenuItem } from '@/data/menuData';
import { useCart } from '@/context/CartContext';

interface MenuItemCardProps {
  item: MenuItem;
  onViewDetails: () => void;
}

const MenuItemCard = ({ item, onViewDetails }: MenuItemCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // This is crucial to stop the modal from opening when you just want to add to cart.
    addToCart(item);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      onClick={onViewDetails}
      className="bg-surface rounded-lg overflow-hidden shadow-lg flex flex-col w-full max-w-sm cursor-pointer transition-transform duration-300 hover:-translate-y-2"
    >
      {/* 
        THIS IS THE FIX: 
        A dedicated 'relative' container for the image and badge.
        This isolates their positioning and prevents the image from being hidden.
      */}
      <div className="relative">
        {item.isSpecial && (
          <motion.div
            className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10"
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 15 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            Chef's Special
          </motion.div>
        )}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
          width="400"
          height="300"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-on-surface">{item.name}</h3>
        <p className="text-on-background/80 mt-2 flex-grow">{item.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-primary">Ksh {item.price}</span>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
          >
            Add to Order
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItemCard;