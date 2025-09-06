import { motion } from 'framer-motion';
import type { MenuItem } from '@/data/menuData';

interface FeaturedItemBannerProps {
  item: MenuItem;
  onExplore: () => void; // A function to call when the explore button is clicked
}

const FeaturedItemBanner = ({ item, onExplore }: FeaturedItemBannerProps) => {
  return (
    <motion.div
      key="featured-banner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-surface rounded-lg shadow-xl overflow-hidden w-full max-w-4xl"
    >
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 md:h-full object-cover"
            width="600"
            height="600"
            loading="eager" // Load this image eagerly as it's a key visual
          />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2 relative">
          {item.isSpecial && (
            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Chef's Special
            </div>
          )}
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-on-surface">
            {item.name}
          </h2>
          <p className="mt-3 text-on-background/80">
            {item.description}
          </p>
          <div className="mt-6">
            <button
              onClick={onExplore}
              className="px-6 py-3 font-semibold text-white transition-transform duration-300 bg-primary rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface hover:scale-105"
            >
              Explore The Full Menu
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedItemBanner;