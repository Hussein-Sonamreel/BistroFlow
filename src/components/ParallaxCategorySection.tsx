import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MenuItem } from '@/data/menuData';
import MenuItemCard from './MenuItemCard';

interface ParallaxCategorySectionProps {
  category: string;
  items: MenuItem[];
  backgroundAnimation?: ReactNode;
  onViewDetails: (item: MenuItem) => void;
}

const ParallaxCategorySection = ({ category, items, backgroundAnimation, onViewDetails }: ParallaxCategorySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    // THIS IS THE FIX: Added `bg-background` to give the section a solid background.
    <div ref={ref} className="relative py-12 overflow-hidden rounded-lg bg-background">
      {backgroundAnimation}
      
      <h3 className="text-3xl font-serif font-bold text-on-background mb-8 text-center relative z-10">
        {category}
      </h3>
      
      <motion.div style={{ y: contentY }} className="flex flex-wrap justify-center gap-8 relative z-10">
        {items.map((item) => (
          <MenuItemCard 
            key={item.id} 
            item={item} 
            onViewDetails={() => onViewDetails(item)} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxCategorySection;